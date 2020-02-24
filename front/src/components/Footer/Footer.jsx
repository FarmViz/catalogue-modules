import React from "react";
import '../Css/Grid.css';
import '../Css/Global.css';
import FooterNewsLetter from "./FooterNewsLetter";
import FooterLinks from "./FooterLinks";
import FooterBanner from "./FooterBanner";
import FooterContact from "./FooterContact";
import FooterSocialNetwork from "./FooterSocialNetwork";
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class Footer extends React.Component {
 
    render() {
        return (
            <div className="dsk-12 tab-12 mob-12 row ">

                <div className="dsk-12 tab-12 mob-12 row alignCenter blueDiv">
                     {/* section 1  Contact*/}
                    <FooterContact />

                    {/* section 2  liens page*/}
                    <FooterLinks />

                    {/* section 3 Newsletter*/}
                    <FooterNewsLetter />

                    {/* section 4  Reseaux sociaux */}
                    <FooterSocialNetwork />
                    
                </div>

                {/* section 5  Banniere inferieur */}
                <FooterBanner />
            </div >
        )
    }
}

export default Footer;
