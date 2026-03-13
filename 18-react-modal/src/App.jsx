import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [state, setState] = useState(false);

  function modalAbierto() {
    setState(true);
  }

  function onClose() {
    setState(false);
  }

  return (
    <>
      {state && <Modal onClose={onClose} />}
      <h3>Ejercicio de modal</h3>
      <p>
        Debajo de este texto hay un botón que al hacerle click debe aparecer un
        modal
      </p>
      <button onClick={modalAbierto}>Abrir modal</button>
    </>
  );
}

export default App;
