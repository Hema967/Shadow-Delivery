"use client";

export default function Checkout() {
  const placeOrder = () => {
    const ordersRaw = localStorage.getItem("orders");
    const orders = ordersRaw ? (JSON.parse(ordersRaw) as unknown[]) : [];
    if (orders.length === 0) {
      alert("No items found. Please add items to cart first.");
      return;
    }

    alert("Order placed successfully ✅");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🧾 Checkout</h1>

      <h3>Total: ₹200</h3>

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

