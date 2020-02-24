import React, {Component} from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './Footer1.css';

class FooterContact extends Component {


    render() {
        return(
            <div className="dsk-2 tab-3 mob-12 center block column blueDiv txt">
                    <img className="size-img-footer1 paddingLogoFooter" src="/logo192.png" alt="logo" />
                    <h4 className="paddingh2 ">Contactez-Nous</h4>
                    <div className="center column blueDiv">
                        <a className="txt-white liste-none paddingBottomBlockText" href="tel:+33683607216"><i class="fi-xnsrxl-phone-solid"></i>+33 2 42 45 36 55</a>
                        <a className="txt-white liste-none paddingBottomBlockText" href="mailto:contact@farmviz.fr"><i class="fi-xwsuxl-envelope-solid"></i>contact@farmviz.fr</a>
                        <a className="txt-white liste-none paddingFormulaire" href="/">Formulaire de Contact</a>
                        
                    </div>
                </div>

        )
    }
}

export default FooterContact;