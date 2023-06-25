import { useState } from 'react';
import logo from '../../logo.png'

const Title = () => (
  <a href="/">
 
        <img
        src={logo}
        width="100px"
        alt="loogo"
        />
    </a>
  );




  
  /* Way two of writing react component*/

  const Header = () => (    
    <div className="header">
      <Title />
      <div className="nav-items">
          <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Cart</li>
          </ul>
      </div>
    </div>
  );


  export default Header