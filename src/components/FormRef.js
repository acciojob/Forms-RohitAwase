import React,{ useRef } from "react";
import Card from "./Card";

function FormRef() {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value
    };

    console.log(formData);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Form submitted successfully!");
  }

  return (
    <Card>
      <h2>Form using useRef</h2>

      <form id="info-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="full_name"
          placeholder="Full Name"
          ref={fullNameRef}
          required
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
          ref={emailRef}
          required
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />

        <input
          type="password"
          id="password_confirmation"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;