import React,{ useState } from "react";
import Card from "./Card";

function FormState() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  function handleChange(e) {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match!");
      return;
    }

    console.log(formData);
    alert("Form submitted successfully!");
  }

  return (
    <Card>
      <h2>Form using useState</h2>

      <form id="info-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          id="password_confirmation"
          placeholder="Confirm Password"
          value={formData.password_confirmation}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;