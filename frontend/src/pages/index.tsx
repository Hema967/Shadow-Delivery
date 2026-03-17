import { useMemo, useState } from "react";

type Product = { id: number; name: string; price: number };
type CartItem = Product & { qty: number };

export default function Home() {
  const products: Product[] = [
    { id: 1, name: "Milk", price: 50 },
    { id: 2, name: "Bread", price: 30 },
    { id: 3, name: "Eggs", price: 60 },
    { id: 4, name: "Rice", price: 120 },
  ];

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    localStorage.setItem("orders", JSON.stringify(cart));
    alert("Order placed successfully ✅");
  };

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
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="/orders">
            <button>Orders</button>
          </a>
          <div>Cart 🛒 ({cartCount})</div>
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
              onClick={() => addToCart(item)}
              style={{
                background: "black",
                color: "white",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              Add
            </button>
          </div>
        ))}
      </div>

      <div style={{ padding: "20px" }}>
        <h2>🛒 Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              {item.name} - ₹{item.price} × {item.qty}{" "}
              <button onClick={() => increaseQty(item.id)}> + </button>
              <button onClick={() => decreaseQty(item.id)}> - </button>
            </div>
          ))
        )}
        <h3>Total: ₹{total}</h3>

        <button
          onClick={placeOrder}
          style={{
            padding: "10px",
            background: "green",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Place Order
        </button>

        <a href="/checkout">
          <button
            style={{
              marginTop: "12px",
              padding: "10px 20px",
              background: "green",
              color: "white",
              borderRadius: "8px",
            }}
          >
            Go to Checkout
          </button>
        </a>
      </div>
    </div>
  );
}
