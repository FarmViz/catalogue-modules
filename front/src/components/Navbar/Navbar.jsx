import React from "react";
import "./Navbar.css"

class Navbar extends React.Component {

    render(){
        return (  
   <nav className="header off-1">
     <h2 className="logo">FARMVIZ SAS</h2>
    <input type="checkbox" id="chk"/>
    <label htmlFor="chk" className="show-menu-btn">
    <i className="fas fa-bars"></i>
    </label>
    <ul className="menu dsk-6">
    <li><a href="/">Accueil</a></li>  
     <li><a href="/">Services</a></li> 
    <li><a href="/">Société</a></li>  
     <li><a href="/">Contact</a></li> 
      <label htmlFor="chk" className="hide-menu-btn">
        <i className="fas fa-times"></i>
      </label>
    </ul>
  </nav>   
        )
    }
}
export default Navbar;
