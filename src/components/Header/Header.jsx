import React from 'react'

import logo from "./logo.png";

function Header() {
  return (
    <header className='conteneur'>

    <img src={logo} alt='logo' />

    <nav>
        <p>Acceuil</p>
        <p>A Propos</p>
    </nav>

    </header>
  )
}

export default Header
