import "./Modal.css";

function Modal({ onClose }) {
  return (
    <div className="overlay">
      <div className="modal">
        <h2>Esto es un modal</h2>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default Modal;
