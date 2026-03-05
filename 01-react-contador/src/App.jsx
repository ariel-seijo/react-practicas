import { useState } from "react";
import "./App.css";
export default App;

function App() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador((prev) => prev + 1);
  };
  const restar = () => {
    if (contador === 0) {
      alert("El número no puede ser menor a 0.");
      return;
    }
    setContador((prev) => prev - 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <>
      <h1 className="contador">{contador}</h1>
      <button className="sumar" onClick={sumar}>
        sumar
      </button>
      <button className="restar" onClick={restar}>
        restar
      </button>
      <button className="reiniciar" onClick={reiniciar}>
        reiniciar
      </button>
    </>
  );
}
