"use client";

export default function Checkout() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>🧾 Checkout</h1>

      <div style={{ marginTop: "20px" }}>
        <h3>Total Amount: ₹200</h3>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            background: "green",
            color: "white",
            borderRadius: "8px",
          }}
        >
          Pay with UPI
        </button>
      </div>
    </div>
  );
}

