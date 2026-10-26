import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

// Récupération de la clé publique depuis le fichier .env
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "pk_test_YWRlcXVhdGUtdG9ydG9pc2UtNTA1OS5jbGVyay5hY2NvdW50cy5kZXYk"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)
