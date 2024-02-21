import { useState } from "react";

export default function LoginPage() {
  // State, état
  const [nameInput, setNameInput] = useState("");

  // Comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Bonjour ${nameInput}`);
    setNameInput("");
  };

  const handleChange = (event) => {
    setNameInput(event.target.value);
  };

  // Affichage (render)
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={nameInput}
          placeholder="Entrez votre prénom..."
          onChange={handleChange}
          required
        />
        <button type="submit">Accéder à votre espace</button>
      </form>
    </div>
  );
}
