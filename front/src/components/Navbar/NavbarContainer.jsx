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
            // NavbarContainer
            <div className="dsk-12 tab-12 mob-12 row justContCenter navbarContainer">


                {/* NavBar */}
                <div className="dsk-12 tab-12 mob-12 max-width flex alignItemCenter">


                    {/* Bloc Logo */}

                    <NavbarLogo />


                    {/* {Bloc Menu- Menu Burger} */}

                    <NavbarMenu />

            

                </div>

            </div>
        );
    }
}

export default NavbarContainer;


