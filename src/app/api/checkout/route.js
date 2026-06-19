import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { priceId } = await req.json();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_creation: "always",
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
      customer_creation: "always",
      invoice_creation: {
        enabled: true,
        invoice_data: {
          footer: `Köszönjük a vásárlást! A könyveket bármikor letöltheted a weboldalunkon az e-mail címed megadásával: ${process.env.NEXT_PUBLIC_APP_URL}/letoltes`
        }
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
