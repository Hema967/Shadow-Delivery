"use client";
import { useState } from "react";

type OrderItem = { id: number; name: string; price: number; qty: number };

export default function Orders() {
  const [orders] = useState<OrderItem[]>(() => {
    if (typeof window === "undefined") return [];
    const data = window.localStorage.getItem("orders");
    return data ? (JSON.parse(data) as OrderItem[]) : [];
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>📦 Your Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((item, index) => (
          <div key={index}>
            {item.name} - ₹{item.price} × {item.qty}
          </div>
        ))
      )}
    </div>
  );
}

