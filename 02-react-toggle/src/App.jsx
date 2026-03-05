import { useState } from "react";
import "./App.css";
export default App;

function App() {
  const [status, setStatus] = useState(false);

  const interruptor = () => {
    setStatus(!status);
  };

  return (
    <>
      <h1 className="nombre-ejercicio">Interruptor</h1>
      <button
        className={status === false ? "interruptor off" : "interruptor on"}
        onClick={interruptor}
      >
        {status === false ? "encender" : "apagar"}
      </button>
    </>
  );
}
