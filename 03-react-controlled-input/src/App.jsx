import { useState } from "react";
import "./App.css";
export default App;

function App() {
  const [text, setText] = useState("");
  const controlText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1 className="titulo-ejercicio">Input controlado</h1>
      <h3 className="descripcion-ejercicio">
        Lo que escribas aparecerá debajo
      </h3>
      <input value={text} onChange={controlText}></input>
      <p>{text}</p>
    </>
  );
}
