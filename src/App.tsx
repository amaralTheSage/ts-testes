import React, { useState } from "react";
import logo from "./logo.svg";

function App() {
  const [numero, setNumero] = useState(0);

  return (
    <>
      <img src={logo} alt="logo" />
      <p>{numero}</p>
      <form>
        <input
          type="number"
          placeholder="Número"
          onChange={(e) => setNumero(Number(e.target.value))}
        />
      </form>

      <h1>FUNCIONAAAAAAAAAAAA</h1>
    </>
  );
}

export default App;
