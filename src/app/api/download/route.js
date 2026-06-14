import Stripe from "stripe";
import fs from "fs";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const session_id = searchParams.get("session_id");
  const type = searchParams.get("type"); // "pdf" or "epub"

  if (!session_id || !type) {
    return new Response("Hiányzó paraméterek (session_id vagy type)", { status: 400 });
  }

  // 1. Stripe visszaellenőrzés
  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch (error) {
    return new Response("Érvénytelen azonosító", { status: 400 });
  }

  if (session.payment_status !== "paid") {
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
