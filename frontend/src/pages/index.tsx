export default function Home() {
  const products: Array<{ id: number; name: string; price: number }> = [
    { id: 1, name: "Milk", price: 50 },
    { id: 2, name: "Bread", price: 30 },
    { id: 3, name: "Eggs", price: 60 },
    { id: 4, name: "Rice", price: 120 },
  ];

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

      <div style={{ padding: "30px" }}>
        <h1>🚀 Shadow Delivery App</h1>
        <p>Get groceries in minutes</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button
              style={{
                background: "black",
                color: "white",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
