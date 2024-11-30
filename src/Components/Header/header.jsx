import React from "react";
import logo from '/Users/macintosh/Desktop/react/tp1-profile/src/Components/Images/logo .png';
import './header.css'
function Header(){
    return(
        <header>
          <img src={logo} />
          <h1>Our School</h1>
        </header>
    );
}
export default Header;