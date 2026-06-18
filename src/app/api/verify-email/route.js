import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ error: "E-mail cím megadása kötelező." }, { status: 400 });
    }

    // Keresés az ügyfelek között
    const customers = await stripe.customers.list({
      email: email.toLowerCase().trim(),
      limit: 10,
    });

    if (customers.data.length === 0) {
      return Response.json({ success: false, message: "Nem találtunk vásárlást ezzel az e-mail címmel." });
    }

    let hasPaidSession = false;

    // Végigmegyünk az ügyfeleken (általában csak 1 van) és megnézzük a vásárlásaikat
    for (const customer of customers.data) {
      const sessions = await stripe.checkout.sessions.list({
        customer: customer.id,
        limit: 10,
      });

      if (sessions.data.some(session => session.payment_status === "paid")) {
        hasPaidSession = true;
        break;
      }
    }

    if (hasPaidSession) {
      return Response.json({ success: true });
    } else {
      return Response.json({ success: false, message: "A vásárlás még nincs kifizetve." });
    }

  } catch (err) {
    console.error("Stripe verify-email error:", err);
    return Response.json(
      { error: "Szerver hiba történt az ellenőrzés során." },
      { status: 500 }
    );
  }
}
