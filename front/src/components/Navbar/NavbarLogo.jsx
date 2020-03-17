// bloc affichant le logo 


import React from "react";
import '../Css/Global.css';
import '../Css/Grid.css';
import './NavbarLogo.css';

class NavbarLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            // conteneur du logo
            <div className="dsk-3 tab-4 mob-6 flex baseline alignItemCenter marginLeft1rem"> 
            
            {/* Le logo: peut-être remplacé par une image */}
            <h1 className="ruby logo marginReft_2">FarmViz<p className="sas">sas</p></h1>

            </div>
         );
    }
}
 
export default NavbarLogo;
