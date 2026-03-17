export default function Home() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 30px",
          background: "black",
          color: "white",
        }}
      >
        <h2>Shadow</h2>
        <div>
          <button style={{ marginRight: "10px" }}>Login</button>
          <button>Cart 🛒</button>
        </div>
      </nav>

      <div style={{ padding: "40px" }}>
        <h1>🚀 Shadow Delivery App</h1>
        <p>Get groceries in minutes!</p>
        <button
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            borderRadius: "8px",
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
