import React from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './TopBannerRight.css';

class TopBannerRight extends React.Component {

  render() {
    return (
     <div className="topbannerleft droite border dsk-6 tab-12 mob-12 " >
       <div>
          <a className="center droite couleur" >Service client 6J/7 de 7h à 21h</a><i className="fas fa-phone"></i> 
          <a className="center texte14b couleur" href="tel:+33223235210"> +(33)2 24 24 52 10</a>
       </div>
    </div>
    );
  }
}

export default TopBannerRight;
