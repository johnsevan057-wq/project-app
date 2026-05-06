import { Link } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "red",
    fontWeight: "500",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        borderBottom: "1px solid #eee",
        color: "green",
      }}
    >
      {/* LOGO */}
      <div>
        <h1 style={{ margin: 0 }}>App</h1>
      </div>

      {/* LINKS */}
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>

        <Link to="/menu" style={linkStyle}>
          Menu
        </Link>

        <Link to="/reservation" style={linkStyle}>
          Reservation
        </Link>

        <Link to="/about" style={linkStyle}>
          About
        </Link>

        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
