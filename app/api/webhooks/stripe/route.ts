import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ received: true, mode: "demo", note: "Configure STRIPE_SECRET_KEY et STRIPE_WEBHOOK_SECRET pour vérifier les événements." });
  }

  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature ?? "", process.env.STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    return NextResponse.json({ error: "Signature Stripe invalide" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    // TODO: enregistrer/mettre à jour la commande en base de données.
    // 1. Récupérer event.data.object.
    // 2. Vérifier le montant payé.
    // 3. Créer la commande et ses lignes.
    // 4. Décrémenter le stock.
    // 5. Envoyer l’email de confirmation.
  }

  return NextResponse.json({ received: true });
}
