// module affichant la punchline

import React, {Component} from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './TopBannerLeft.css';

class TopBannerLeft extends Component {

    render() {
        return(

            // conteneur de la partie gauche de la bannière (punchline)
            <div className="dsk-6 tab-0 mob-0 row TopBannerLeft">

                {/* punchline */}
                <p className="TopBannerLeftFontSize">La technologie au service de l'homme et de l'environnement</p>
            </div>
        )
    }
}


export default TopBannerLeft;
