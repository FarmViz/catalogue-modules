// module affichant le numéro du service après-vente

import React from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './TopBannerRight.css';

class TopBannerRight extends React.Component {

  render() {
    return (

      // conteneur de la partie droite de la bannière de l'en-tête du site
     <div className=" droite dsk-6 tab-12 mob-12 " >
       <div>

          {/* liens vers le numéro de téléphone du service après vente, fonctionnel en version mobile */}
          <a className="justContCenter texte14Bold paddingRightService couleur" >Service client 6J/7 de 7h à 21h</a><i className="fas fa-phone paddingPhone phoneReverse"></i> 
          <a className="justContCenter texte14Bold couleur paddingNumber mobile" href="tel:+33223235210"> +(33)2 24 24 52 10</a>
          <a className="justContCenter texte14Bold couleur paddingNumber cache_tel"> +(33)2 24 24 52 10</a>
       </div>
    </div>
    );
  }
}

export default TopBannerRight;
