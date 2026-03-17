import { NextResponse } from "next/server";
import Razorpay from "razorpay";

function getRazorpay() {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_id || !key_secret) {
    return null;
  }

  return new Razorpay({ key_id, key_secret });
}

export async function POST(req: Request) {
  const razorpay = getRazorpay();
  if (!razorpay) {
    return NextResponse.json(
      { error: "Missing Razorpay env vars" },
      { status: 500 }
    );
  }

  const { amount } = (await req.json()) as { amount: number };

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
  });

  return NextResponse.json(order);
}

