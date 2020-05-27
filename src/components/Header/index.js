import React from 'react';

import iconFacebook from '../../assets/facebook.png'

function Header() {
  return (
    <header className="header">
      <a href="#"><img src={iconFacebook} className="icone-menu" alt="icone do facebook"/></a>
      <nav>
        <ul className="menu">
          <li>Meu perfil</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;