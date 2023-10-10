import React from 'react'
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Header() {
  return (
    <header className='conteneur'>

    <img src={logo} alt='logo' />

    <nav>
      
       <Link to ="/"> Acceuil</Link>
       <Link to ="/About"> A Propos</Link>
    </nav>

    </header>
  )
}

export default Header
