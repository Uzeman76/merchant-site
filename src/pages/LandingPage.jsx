import React, { useEffect } from 'react';

export default function LandingPage() {
  
  // Charge le script Lemon Squeezy au chargement du composant
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.lemonsqueezy.com/lemon.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="landing-page">
        {/* 
          Le bouton utilise la classe 'lemonsqueezy-button' 
          et le lien de ton produit créé sur leur site
        */}
        <a
          href="https://embercorp.lemonsqueezy.com/checkout/buy/82f5256f-6373-403c-baad-4ce82194456d"
          className="lemonsqueezy-button"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#FF6B00',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginTop: '15px'
          }}
        >
          Acheter maintenant
        </a>
      </div>
  );
}