import Stripe from "stripe";
import fs from "fs";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const session_id = searchParams.get("session_id");
  const email = searchParams.get("email");
  const type = searchParams.get("type");

  if ((!session_id && !email) || !type) {
    return new Response("Hiányzó paraméterek (session_id/email vagy type)", { status: 400 });
  }

  // 1. Stripe visszaellenőrzés
  let isPaid = false;

  if (session_id) {
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id);
      if (session.payment_status === "paid") {
        isPaid = true;
      }
    } catch (error) {
      return new Response("Érvénytelen azonosító", { status: 400 });
    }
  } else if (email) {
    try {
      const customers = await stripe.customers.list({
        email: email.toLowerCase().trim(),
        limit: 10,
      });
      
      for (const customer of customers.data) {
        const sessions = await stripe.checkout.sessions.list({
          customer: customer.id,
          limit: 10,
        });
        
        if (sessions.data.some(s => s.payment_status === "paid")) {
          isPaid = true;
          break;
        }
      }
    } catch (error) {
      return new Response("Hiba a hitelesítés során", { status: 500 });
    }
  }

  if (!isPaid) {
    return new Response("Nincs kifizetve", { status: 403 });
  }

  // 2. Fájl kiválasztása
  let fileName = "";
  if (type === "pdf") {
    fileName = "az-erem-ket-oldala-STANDARD.pdf";
  } else if (type === "epub") {
    fileName = "az-erem-ket-oldala-epub.epub";
  } else {
    return new Response("Érvénytelen fájltípus", { status: 400 });
  }

  const filePath = path.join(process.cwd(), "private", fileName);

  try {
    // Fájl létezésének ellenőrzése
    if (!fs.existsSync(filePath)) {
      console.error(`Fájl nem található: ${filePath}`);
      return new Response("A fájl jelenleg nem elérhető a szerveren.", { status: 404 });
    }

    // Fájl beolvasása és visszaküldése
    const fileBuffer = fs.readFileSync(filePath);
    
    // Content-Type beállítása
    const contentType = type === "pdf" ? "application/pdf" : "application/epub+zip";

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    });

  } catch (err) {
    console.error("Hiba a fájl letöltésekor:", err);
    return new Response("Szerver hiba történt a fájl elérésekor", { status: 500 });
  }
}
