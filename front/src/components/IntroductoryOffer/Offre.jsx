import React from "react";
import './OffreLinks.css'
import '../Css/Global.css';
import '../Css/Grid.css';
import './IntroductoryOffer.css';

import OffreLinks from './OffreLinks';

class Offre extends React.Component {
    render() {
        return (
            <div className="height-offre-txt">
                     <OffreLinks />                                      
            </div >
          
        )
    }
}
export default Offre;
