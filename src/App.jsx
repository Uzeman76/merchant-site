import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import Home from './pages/home.jsx';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <header>
        {/* Affiché uniquement si l'utilisateur est déconnecté */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="btn-login">Se connecter</button>
          </SignInButton>
        </SignedOut>

        {/* Affiché uniquement si l'utilisateur est connecté */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <main>
        <SignedIn>
          <Dashboard />
        </SignedIn>
        <SignedOut>
          <div className="test text-center">
            <p>Veuillez vous connecter pour accéder à votre espace et à la boutique.</p>
          </div>
        </SignedOut>
      </main>
    </div>
  );
}

// Exemple de composant utilisant le hook useUser pour lire les données
function Dashboard() {
  const { user } = useUser();

  return (
    <div>
      <h1 className="titre one">
        Bienvenue, {user?.firstName || user?.emailAddresses?.[0]?.emailAddress} !
      </h1>
      <Home />
    </div>
  );
}
