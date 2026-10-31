import React from "react";
import Card from "./Card";

function Form() {
    console.log(2);
    
  return (
    <Card>
      <h2>Basic Form</h2>

      <form id="info-form">
        <input
          type="text"
          id="full_name"
          placeholder="Full Name"
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
        />

        <input
          type="password"
          id="password_confirmation"
          placeholder="Confirm Password"
        />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default Form;