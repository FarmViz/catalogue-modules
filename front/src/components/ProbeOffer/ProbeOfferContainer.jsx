import React from "react";
import '../Css/Global.css';
import '../Css/Grid.css';
import './ProbeOfferContainer.css';
import OfferProbeImage from "./OfferProbeImage";
import OfferProbePreOrder from "./OfferProbePreOrder";

class ProbeOfferContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // ProbeOfferContainer
            <div className="dsk-12 tab-12 mob-12 row center probeOfferContainer max-width">

                    {/* Bloc Images */}

                    <OfferProbeImage />   

                    {/* {Bloc Offre de lancement } */}

                    <OfferProbePreOrder />
                  
                    {/* {Bloc Offre de lancement } */}

                    <OfferProbePreOrder /> 

            </div>
        );
    }
}

export default ProbeOfferContainer;


