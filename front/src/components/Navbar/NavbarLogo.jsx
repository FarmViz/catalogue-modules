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
            <div className="dsk-3 tab-4 mob-4 row"> 

            <h1 className="ruby logo">FarmViz</h1><p>sas</p>

            </div>
         );
    }
}
 
export default NavbarLogo;
