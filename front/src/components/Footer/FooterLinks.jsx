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
                <section className="dsk-3 tab-3 mob-0 column FooterLinksContainer">

                    {/* div d'alignement horizontal et vertical des liens  */}
                    <ul className=" column txt">
                        <a href="/"><li className="FooterLinks texte18">Accueil</li></a>
                        <a href="/services"><li className="FooterLinks texte18">Services</li></a>
                        <a href="/societe"><li className="FooterLinks texte18" >Société</li></a>
                        <a href="/contact"><li className="FooterLinks texte18">Contact</li></a>
                    </ul>

                </section>

                {/* affichage mobile */}
                <section className="mob-12 column FooterLinksContainer">
                    <ul className="dsk-0 tab-0 mob-12 row FooterLinksPadding">
                        <a href="/"><li className="mobFooterLinks texte18">Accueil</li></a>
                        <a href="/services"><li className="mobFooterLinks texte18">Services</li></a>
                        <a href="/societes"><li className="mobFooterLinks texte18" >Société</li></a>
                        <a href="/contact"><li className="mobFooterLinks texte18">Contact</li></a>
                    </ul>
                </section>
            </>
        )
    }
}

export default FooterLinks;
