import React, { Component } from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './FooterLinks.css';
import { NavLink } from 'react-router-dom';


class FooterLinks extends Component {



    render() {
        return (
            <>

                {/* affichage bureau et tablette */}
                <div className="dsk-3 tab-3 mob-0 column FooterLinksContainer">

                    {/* div d'alignement horizontal et vertical des liens  */}
                    <ul className=" off-dsk-3 off-tab-1  FooterLinksPadding">
                        <a><li className="FooterLinks texte18">Accueil</li></a>
                        <a><li className="FooterLinks texte18">Services</li></a>
                        <a><li className="FooterLinks texte18" >Société</li></a>
                        <a><li className="FooterLinks texte18">Contact</li></a>
                    </ul>

                </div>

                {/* affichage mobile */}
                <div className="mob-12 column FooterLinksContainer">
                <ul className="dsk-0 tab-0 mob-12 row FooterLinksPadding">
                    <a><li className="mobFooterLinks texte18">Accueil</li></a>
                    <a><li className="mobFooterLinks texte18">Services</li></a>
                   <a><li className="mobFooterLinks texte18" >Société</li></a>
                    <a><li className="mobFooterLinks texte18">Contact</li></a>
                </ul>
                </div>
            </>
        )
    }
}






export default FooterLinks;