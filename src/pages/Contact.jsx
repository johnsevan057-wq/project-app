import { useState, useEffect } from "react";

export default function Contact() {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    document.title = "Contact Us - Bawarchi Restaurant";
  }, []);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (contact.name && contact.phone && contact.message)
      ? alert("Message Sent Successfully!")
      : alert("Please fill all fields!");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        textAlign: "center"
      }}
    >

      {/* ✅ TOP NAME */}
      <h1 style={{ marginBottom: "10px" }}>
        Bawarchi Restaurant
      </h1>

      {/* Contact Info */}
      <p><strong>Phone:</strong> +92 300 1234567</p>

      <p>
        <strong>WhatsApp:</strong>{" "}
        <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">
          Chat on WhatsApp
        </a>
      </p>

      <p><strong>Opening Hours:</strong> 12 PM – 12 AM</p>

      {/* Map */}
      <div style={{ margin: "20px 0" }}>
        <iframe
          title="Bawarchi Restaurant Location"
          src="https://www.google.com/maps?q=Bundu+Khan+Restaurant&output=embed"
          style={{
            width: "90%",
            maxWidth: "400px",
            height: "250px",
            border: 0,
            borderRadius: "10px"
          }}
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Heading (below map) */}
      <h2>Contact Us</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "400px"
        }}
      >
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={contact.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="text"
          id="phone"
          placeholder="Phone Number"
          value={contact.phone}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <textarea
          id="message"
          placeholder="Your Message"
          value={contact.message}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        ></textarea>

        <button
          type="submit"
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Send
        </button>
      </form>

    </div>
  );
}