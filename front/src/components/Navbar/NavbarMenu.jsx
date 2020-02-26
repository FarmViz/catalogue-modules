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
            // NavbarMenu
         


                <nav className="dsk-9 tab-8 mob-7 row flex-end ">

                    <input type="checkbox" id="chk" />
                    <label htmlFor="chk" className="show-menu-btn">
                        <i className="fas fa-bars burgercolor"></i>
                    </label>
                    <ul className="menu dsk-8 NavbarMenuFontSize">
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/societe">Société</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <label htmlFor="chk" className="hide-menu-btn marg">
                            <i className="fas fa-times burgercolor"></i>
                        </label>
                    </ul>
                </nav>
          
        );
    }
}
export default NavbarMenu;