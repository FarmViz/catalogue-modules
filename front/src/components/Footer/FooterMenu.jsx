import React, { Component } from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './FooterMenu.css';

class FooterMenu extends Component {


    render() {
        return (
            <>
                
                    <div className="dsk-2 tab-12 mob-12 column alignCenter baseLine padding25TopBottom">
                        <ul className="column text12Bold footerMenuRow baseLine between tab-5 ">
                            <a href="/"><li className="footerMenuLi baseLine ">Accueil</li></a>
                            <a href="/services"><li className="footerMenuLi">Services</li></a>
                            <a href="/societe"><li className="footerMenuLi" >Société</li></a>
                            <a href="/contact"><li className="footerMenuLi">Contact</li></a>
                        </ul>
                    </div>
                    
                

            </>
        )
    }
}


export default FooterMenu;