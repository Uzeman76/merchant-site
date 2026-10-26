import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/home.jsx";
import Login from "./Routes/Login.jsx";
import Register from "./Routes/Register.jsx";
import { UserContext } from "./UserContext.jsx";

// Composant pour la page 404
function Errorpage() {
  return (
    <div className="p-5 text-center">
      <h2>404 - Page non trouvée</h2>
      <p>La page que vous cherchez n'existe pas.</p>
      <Link to="/" className="btn btn-primary mt-2">
        Retour à l'accueil
      </Link>
    </div>
  );
}

function App() {
  // 2. Récupération de l'utilisateur connecté depuis le localStorage
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentUser"));
    } catch {
      return null;
    }
  });

  // 3. Définition de la fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <nav className="d-flex align-items-center gap-2 p-3">
          <Link to="/" className="bouton btn btn-outline-primary">
            Home
          </Link>

          {/* Condition : Si l'utilisateur est connecté, on affiche son menu */}
          {user ? (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-user">
                {user.name || "Mon Compte"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/">
                  Accueil
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout} className="text-danger">
                  Déconnexion
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            /* Sinon, on affiche les boutons Connexion / Inscription */
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-guest">
                Compte
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/login">
                  Login
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/register">
                  Register
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/errorpage" element={<Errorpage />} />
          <Route path="*" element={<Navigate to="/errorpage" replace />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
