// composant affichant le menu du site

import React from "react";
// import '../Css/Global.css';
import '../Css/Grid.css';
import '../Navbar/NavbarMenu.css';

class NavbarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // Début de la section navigation
                <nav className="dsk-9 tab-7 mob-6 row justContFlexEnd marginLeft3Rem">

                    {/* checkbox permettant l'affichage du meu burger */}
                    <input type="checkbox" id="chk" className=" marginRight_1"/>

                    {/* étiquette permettant l'affichage de l'icône du menu */}
                    <label htmlFor="chk" className="show-menu-btn labelMenuBtn">
                        <i className="fas fa-bars burgercolor marginRight1rem"></i>
                    </label>

                    {/* liste des pages accessibles par le menu */}
                    <ul className="menu dsk-8 NavbarMenuFontSize texte14Bold">
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/societe">Société</a></li>
                        <li><a href="/contact">Contact</a></li>

                        {/* icône permettant la fermeture du menu burger */}
                        <label htmlFor="chk" className="hide-menu-btn">
                            <i className="fas fa-times burgercolor"></i>
                        </label>
                    </ul>
                </nav>
                // fin de la section navigation
        );
    }
}
export default NavbarMenu;