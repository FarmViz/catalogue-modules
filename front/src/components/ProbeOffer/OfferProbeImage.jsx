import React, { Component } from "react";
import '../Css/Global.css';
import '../Css/Grid.css';
import './OfferProbeImage.css';

class OfferProbeImage extends Component {

    render() {
        return (

            // conteneur du bloc image
            <>
                <div className="dsk-4 tab-4 mob-12 offerImageParent">
                <div className="dsk-4 tab-4 mob-12">
                    <div className="offerImageParent">
                        <img className="offerImage" src="https://www.toutpourlegrain.fr/jpg/stockage/stockage.jpg" alt="visuel offre de lancement" />
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default OfferProbeImage;