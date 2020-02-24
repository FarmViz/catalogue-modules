import React from "react";
import './IntroductoryOffer.css';
import '../Css/Global.css';
import '../Css/Grid.css';
import Offre from './Offre';

class IntroductoryOffer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="dsk-12 tab-12 mob-12 row">

                <div className="dsk-12 tab-12 mob-12 dsk-fix row">                  

                    <div className="dsk-5 tab-5 mob-12 flex height-parent">
                        <img className="img-fond-blé dsk-12 tab-12 mob-12" alt="fond" src="../../images/fond-blé.jpeg" />

                    </div>

                    <div className="dsk-7 tab-7 mob-12 blue-background height-offre-txt">
                         <Offre/> 
                    </div>


                </div>

            </div>
        );
    }
}
export default IntroductoryOffer
