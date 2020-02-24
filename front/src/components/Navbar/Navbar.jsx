import React from "react";
import "./Navbar.css";
import '../Css/Grid.css';
import '../Css/Global.css';
import TopBanner from './TopBanner.jsx';

class Navbar extends React.Component {

    render() {
        return (
            <>
                {/* bloc bannière */}

                <TopBanner />

                {/* conteneur de la NavBar */}
                <div className=" dsk-12 tab-12 mob-12 flex nowrap ">

                    {/* logo */}
                    <h1 className="dsk-3 tab-4 mob-8 logo ">FarmViz<span className="sas"> SAS</span></h1>

                    {/*conteneur du menu dsk et tab */}
                    <div className=" dsk-9 tab-9 mob-0 flex texte18">
                        <ul className=" flex  alignCenter justify-evenly  menuList verticalMarginAuto">
                            <li className="">Accueil</li>
                            <li className="">Services</li>
                            <li className="">Société</li>
                            <li className="">Contact</li>
                            {/* <select className="selectLanguage column center alignCenter">
                                <option value="fr"> FR</option>
                                <option value="en">  EN</option>
                            </select> */}

                        </ul>

                    </div>

                    {/* conteneur du menu burger */}
                    <div className="dsk-0 tab-0 mob-9 row flexend">
                        <input type="checkbox" id="menu-checkbox" className="menu-checkbox" />
                        <label htmlFor="menu-checkbox" className="menu-toggle">≡</label>
                        <ul className="mob-12 menu ulburger absolute">
                            <input type="checkbox" id="menu-checkbox" className="menu-checkbox" />
                            <label htmlFor="menu-checkbox" className="menu-toggle cross">❌</label>
                            <li>Accueil</li>
                            <li>Services</li>
                            <li>Société</li>
                            <li>Contact</li>

                        </ul>
                    </div>


                    
                </div>

            </>

        )
    }
}
export default Navbar;
