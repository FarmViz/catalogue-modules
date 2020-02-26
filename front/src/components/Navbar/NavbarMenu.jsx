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
         
                <nav className="dsk-9 off-tab-11 tab-1  off-mob-11 mob-1 row">
                    <input type="checkbox" id="chk" />
                    <label htmlFor="chk" className="show-menu-btn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <ul className="menu dsk-9 NavbarMenuFontSize">
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/societe">Société</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <label htmlFor="chk" className="hide-menu-btn">
                            <i className="fas fa-times"></i>
                        </label>
                    </ul>
                </nav>
          
        );
    }
}
export default NavbarMenu;