// Conteneur permettant d'afficher les différents éléments de la barre de navigation du site


import React from "react";
import '../Css/Global.css';
import '../Css/Grid.css';
import '../Navbar/NavbarContainer.css';
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";


class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    
    render() {
        return (
            // Conteneur de la NavBar occupant 100% de la largeur de l'écran
            <div className="dsk-12 tab-12 mob-12 row justContCenter navbarContainer">


                {/*Conteneur limitant la largeur du contenu de la NAvBar à 1024px*/}
                <div className="dsk-12 tab-12 mob-12 max-width flex alignItemCenter">


                    {/* Bloc affichant le Logo */}

                    <NavbarLogo />


                    {/* {Bloc affichant le Menu- Menu Burger} */}

                    <NavbarMenu />

            

                </div>

            </div>
        );
    }
}

export default NavbarContainer;


