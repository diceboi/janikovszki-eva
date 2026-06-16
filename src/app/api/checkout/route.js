import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { priceId } = await req.json();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      billing_address_collection: "required",
      tax_id_collection: {
        enabled: true,
      },
      invoice_creation: {
        enabled: true,
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/koszonjuk?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/#vasarlas`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("Stripe Checkout error:", err.message);
    return Response.json(
      { error: "Nem sikerült a fizetési folyamat létrehozása." },
      { status: 500 }
    );
  }
}
