import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="Nombre"
        value={name}
        onChange={handleName}
      ></input>
      <input
        type="email"
        aria-label="Email"
        value={email}
        onChange={handleEmail}
      ></input>
      <button type="submit" disabled={!name || !email}>
        Enviar
      </button>
    </form>
  );
}

export default Form;
