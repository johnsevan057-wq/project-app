import { useState } from "react";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    size: "",
    requests: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (form.name && form.date && form.time && form.size && form.requests)
      ? alert("Reservation Submitted Successfully!")
      : alert("Please fill all fields including Special Requests!");
  };

  return (
    <div>
      <h2>Reserve a Table</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input type="text" id="name" value={form.name} onChange={handleChange} /><br /><br />

        <label>Date:</label><br />
        <input type="date" id="date" value={form.date} onChange={handleChange} /><br /><br />

        <label>Time:</label><br />
        <input type="time" id="time" value={form.time} onChange={handleChange} /><br /><br />

        <label>Party Size:</label><br />
        <input type="number" id="size" value={form.size} onChange={handleChange} /><br /><br />

        <label>Special Requests:</label><br />
        <textarea id="requests" value={form.requests} onChange={handleChange}></textarea><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}