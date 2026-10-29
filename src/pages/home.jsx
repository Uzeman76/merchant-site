import React from "react";
import LandingPage from "./LandingPage.jsx";
import decaImg from "../assets/deca.jpeg";
import garminImg from "../assets/garmin.webp";
import logoemImg from "../assets/logoem.png";
import runImg from "../assets/run.png";
import suitbasketImg from "../assets/suitbasket.png";
import toutImg from "../assets/tout.png";

function Home() {
  return (
    <div>
      <h1 className="titre one">Ember Suit One</h1>
      
      <div className="test">
        <p>Le maillot de compression Ember Suit One part d'une problématique rencontrée dans le milieu du sport.</p>
        <p>
          Toutes les activités sportives ne sont pas compatibles avec l'utilisation des dispositifs actuels, que ce soit au basketball, au handball, au volleyball ou même en musculation...
          <br />
          Ces dispositifs sont souvent interdits durant la pratique par mesure de sécurité, en raison des contacts possibles sur cette zone.
          <br />
          Mais du coup ...
        </p>
      </div>

      <h2 className="titre">Quelle Alternative avons-nous ?</h2>
      
      <div className="test">
        <p>Sur ce secteur, nous trouvons deux produits principaux :</p>
        <p>Les brassards Garmin et Décathlon.</p>
      <div className="exemple">
        <img src={decaImg} alt="Photo Deca" />
        <img src={garminImg} alt="Photo garmin" />
      </div>
        <p>Le brassard Garmin est un bon produit, mais il reste limité dans son utilisation. En effet, il ne permet pas de suivre la fréquence cardiaque en continu, n'est pas adapté à tous les sports et son prix reste élevé.</p>
        <p>Le produit de Décathlon est, lui aussi, limité : il ne propose pas de GPS et son application n'est pas très aboutie.</p>
        <p>De plus, leur forme rend la pratique peu pratique lors de phases d'opposition.</p>
      </div>
      <h2 className="titre">Où est-ce que l'on innove ?</h2>
      <img src={runImg} alt="Photo run" className="imagedeux"/>
      <div className="test">
        <p>Nous sommes partis avec trois exigences :</p>
        <ul>
          <li>Efficacité</li>
          <li>Discrétion</li>
          <li>Fiabilité</li>
        </ul>
        <p>Pour qu'un capteur de fréquence cardiaque soit efficace, il faut que les électrodes soient bien placées et ne se déplacent pas durant les mouvements.</p>
        <p>
          Nous avons donc développé notre produit autour d'un maillot de compression composé de tissu conducteur en argent, placé sur trois zones du thorax, ainsi que de fils tressés.
          <br />
          Ces améliorations de systèmes déjà existants permettent d'assurer la robustesse, la fiabilité et la précision de notre produit.
        </p>
        <p>Doté d'un capteur cardiaque, d'un GPS et d'un accéléromètre, vous bénéficiez d'un retour en direct sur vos performances ainsi que d'une sauvegarde locale.</p>
        <p>Vous profitez d'un suivi de parcours précis et constant, même sur des distances réduites.</p>
        <p>Notre produit est divisé en deux parties : le maillot de compression, comprenant les capteurs cardiaques, et le boîtier de contrôle amovible, permettant un lavage facile et sûr du maillot au-delà de 90°C.</p>
        <p>Notre boîtier est ultra-léger et possède une batterie de 1500 mAh offrant de 12 à 15 h d'autonomie pour un temps de recharge de 2 h à 2 h 30.</p>
      </div>
<img src={suitbasketImg} alt="Photo suit" className="imagedeux" />
      <h2 className="titre">Nos différents modèles :</h2>
<img src={toutImg} alt="Photo tout" className="imagedeux" />
      <div className="test">
        <p>Grâce aux propriétés uniques de notre textile, nos maillots s'adaptent parfaitement à toutes les morphologies pour un effet « seconde peau » optimal.</p>
        <p>Deux modèles sont à votre disposition : le maillot à manches longues et le maillot à manches courtes.</p>
        <p>Retrouvez un large choix de coloris directement sur notre page produit pour personnaliser votre équipement.</p>
        <LandingPage />
      </div>
    </div>
  )
}

export default Home