import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";
// import './../styles'
function App() {
    console.log(1);
    
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" id="form-link">
          Form
        </Link>

        <Link to="/form-ref" id="form-ref-link">
          Form using useRef
        </Link>

        <Link to="/form-state" id="form-state-link">
          Form using useState
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Form />} />

        <Route path="/form-ref" element={<FormRef />} />

        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
