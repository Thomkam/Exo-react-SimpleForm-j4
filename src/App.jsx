import { useState } from "react";
import "./App.css";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  // State qui gère l'affichage ou non d'un message d'erreur à côté de mon bouton submit
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Si le mot de passe rentré par l'utilisateur fait plus de 8 caractères de long, je fais un truc
    if (password === confirmation) {
      setShowError(false);
      alert("Formulaire validé");
    } else {
      setShowError(true);
    }
    // Sinon je fais autre chose
  };

  return (
    <>
      <header>CREATE ACCOUNT</header>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <div className="container">
          <h2>Name</h2>
          <input
            value={name}
            type="text"
            placeholder="My name"
            name="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <h2>Email</h2>
          <input
            value={email}
            type="email"
            placeholder="e-mail@gmail.com"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <h2 className="password">Password</h2>
          <input
            value={password}
            type="password"
            placeholder="your-password"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <h2 className="confirmation-password">Confirmation of password</h2>
          <input
            value={confirmation}
            type="password"
            placeholder="Confirm your-password"
            name="confirmation-password"
            onChange={(event) => {
              setConfirmation(event.target.value);
            }}
            onSubmit={(event) => {
              event.preventDefault();
            }}
          />
          <input className="btn" type="submit" value="Register" />

          {showError === true && (
            <p style={{ color: "red" }}>
              Vos mots de passe doivent être identique
            </p>
          )}
        </div>
      </form>

      <footer>Made with Passion by Thomas</footer>
    </>
  );
}

export default App;
