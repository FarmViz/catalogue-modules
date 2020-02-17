import React from "react";
import "./Navbar.css"

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

class Navbar extends React.Component {

    render(){
        return (
            <div className="topnav" id="myTopnav">
            <a href="#home" class="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <div className="dropdown">
              <button className="dropbtn">Dropdown 
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> 
            <a href="#about">About</a>
            <a href="javascript:void(0);" className="icon" onclick="myFunction()">&#9776;</a>
          </div>
         
        )
    }
}
export default Navbar;