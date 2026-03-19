import { useState } from "react";

const SITE_CONTENT = {
  about: "Add your About Us text here later...",
  facebook: "K&DCreations",
  email: "kanddcreations2024@gmail.com",
  phone: "757-974-3567"
};

const products = [
  { name: "Custom Shirt", price: 20, img: "/placeholder-shirt.png" },
  { name: "Custom Hoodie", price: 35, img: "/placeholder-hoodie.png" },
  { name: "Tumbler", price: 25, img: "/placeholder-tumbler.png" },
  { name: "Custom Mug", price: 20, img: "/placeholder-mug.png" },
  { name: "Hat", price: 18, img: "/placeholder-hat.png" },
  { name: "Yard Sign", price: 30, img: "/placeholder-sign.png" }
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);
  const [paid, setPaid] = useState(false);

  const total = selectedProduct.price * quantity;

  return (
    <div style={{ fontFamily: "Arial", padding: 20, background: "#f4f1f8" }}>
      <div style={{ textAlign: "center" }}>
        <img src="/logo.png" style={{ width: 180 }} />
        <h1 style={{ color: "#4b2c6f" }}>K&D Creations Inc.</h1>
        <p style={{ color: "#5a8f4d" }}>
          Custom Shirts • Tumblers • Gifts • More
        </p>
      </div>

      <h2>Shop Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {products.map((p) => (
          <div key={p.name} style={{ background: "white", padding: 15, borderRadius: 10 }}>
            <img src={p.img} style={{ width: 100 }} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={() => setSelectedProduct(p)}>Customize</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 30, background: "white", padding: 20 }}>
        <h2>Checkout</h2>
        <p>Product: {selectedProduct.name}</p>

        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <h3>Total: ${total}</h3>

        <label>
          <input type="checkbox" onChange={(e) => setPaid(e.target.checked)} />
          Paid
        </label>

        <br />

        <button
          onClick={() =>
            window.open(`mailto:${SITE_CONTENT.email}?subject=Custom Order`)
          }
        >
          Send Order Email
        </button>

        {paid && <p style={{ color: "green" }}>Order received!</p>}
      </div>

      <div style={{ textAlign: "center", marginTop: 30 }}>
        <p>{SITE_CONTENT.phone}</p>
        <p>{SITE_CONTENT.email}</p>
        <p>{SITE_CONTENT.facebook}</p>
      </div>
    </div>
  );
}
