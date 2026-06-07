import Stripe from "stripe";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("Stripe-Signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 400,
    });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    console.log("=== SIKERES VÁSÁRLÁS ===");
    console.log("Session ID:", session.id);
    console.log("Vásárló E-mail:", session.customer_details?.email);
    console.log("Vásárló Név:", session.customer_details?.name);
    console.log("Payment Status:", session.payment_status);
    console.log("========================");

    // TODO: E-mail küldés a vásárlónak a letöltési linkkel
    // TODO: Adatbázisba mentés
  } else {
    console.log(`Kezeletlen Stripe esemény: ${event.type}`);
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
