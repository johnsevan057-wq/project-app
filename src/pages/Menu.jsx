import { menu } from "../data/dummyData";
import { useState } from "react";

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = Object.keys(menu);

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* LEFT SIDE MENU */}
      <div style={{ width: "40%" }}>
        <h2>Menu</h2>

        {categories.map((category) => (
          <div key={category} style={{ marginBottom: "20px" }}>
            <h3 style={{ textTransform: "capitalize" }}>{category}</h3>

            {menu[category].map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                style={{
                  padding: "12px",
                  marginBottom: "10px",
                  border: "1px solid #eee",
                  borderRadius: "10px",
                  cursor: "pointer",
                  background: "#fff",
                  transition: "0.2s",
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE DETAILS */}
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {selectedItem ? (
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "12px",
              padding: "12px",
              maxWidth: "320px",
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              style={{
                width: "100%",
                height: "170px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3 style={{ margin: "10px 0 6px" }}>
              {selectedItem.name}
            </h3>

            <p
              style={{
                fontSize: "13px",
                color: "#555",
              }}
            >
              {selectedItem.description}
            </p>

            <b style={{ display: "block", marginTop: "8px" }}>
              {selectedItem.price} PKR
            </b>
          </div>
        ) : (
          <h3>Select an item 👈</h3>
        )}
      </div>
    </div>
  );
}