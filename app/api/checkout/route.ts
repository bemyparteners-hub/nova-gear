import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ url: `${siteUrl}/confirmation?demo=1` });
  }

  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const items = Array.isArray(body.items) ? body.items : [];

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: `${siteUrl}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/checkout?cancelled=1`,
    line_items: items.map((item: { name: string; price: number; quantity: number }) => ({
      quantity: item.quantity,
      price_data: {
        currency: "eur",
        unit_amount: Math.round(item.price * 100),
        product_data: { name: item.name },
      },
    })),
    shipping_address_collection: { allowed_countries: ["FR", "BE", "LU", "CH", "DE", "ES", "IT"] },
    allow_promotion_codes: true,
  });

  return NextResponse.json({ url: session.url });
}
