import React from "react";
import '../Css/Global.css';
import '../Css/Grid.css';
import './FooterContact.css';

class FooterContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="dsk-2 tab-3 mob-12 flex column height-footer-contact">
                <div className="dsk-12 tab-12 mob-12 mobile-center">
                <img className="size-logo-farmviz padding-footer-contact" src="" />
                </div>
                <h2 className="padding-footer-contact mobile-center ">CONTACTEZ-NOUS</h2>
                <a className="padding-footer-contact mobile-center" href="tel:+33223235210"><i className="fas fa-phone paddingPhone phoneReverse"></i>02 45 36 55 88</a>
                <a className="padding-footer-contact mobile-center  " href="mailto:contact@farmviz.fr">✉ contact@farmviz.fr</a>
                <a className="padding-footer-contact mobile-center  " href="/">Formulaire de contact</a>

            </div>
        );
    }
}

export default FooterContact;