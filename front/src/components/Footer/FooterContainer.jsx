import React from "react";
import '../Css/Global.css';
import '../Css/Grid.css';
import './FooterContainer.css';
import FooterContact from "./FooterContact";
import FooterMenu from "./FooterMenu";
import FooterNewsletter from "./FooterNewsletter";
import FooterSocialNetwork from "./FooterSocialNetwork";

class FooterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // FooterContainer
            <div className="dsk-12 tab-12 mob-12 row center footerContainer blueDiv">

                {/* Footer */}
                <div className="dsk-12 tab-12 mob-12 max-width flex align ">

                    {/* Bloc Contact */}

                    <FooterContact /> 
                  
                    {/* {Bloc Menu- } */}

                     <FooterMenu /> 

                    {/* Bloc Newsletter */}

                    <FooterNewsletter /> 

                    {/* Bloc réseaux sociaux */}

                     <FooterSocialNetwork /> 

                </div>

            </div>
        );
    }
}

export default FooterContainer;


