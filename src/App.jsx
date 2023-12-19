import { useState } from "react";

function App() {
  // State, état
  const [nameInput, setNameInput] = useState("");

  // Comportements
  const handleSubmit = () => {
    alert(`Bonjour ${nameInput}`);
    setNameInput("");
  };

  const handleChange = (event) => {
    setNameInput(event.nativeEvent.target.value);
  };

  // affichage (render)
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
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

export default App;
