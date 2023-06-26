import { useState } from 'react';
import logo from '../../logo.png'

const loggedInUser = () => { 
  return false
}

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

  const Header = () => { 
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return    (    
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
        { 
        isLoggedIn?<button onClick={() => setIsLoggedIn(false)}>Out</button> : <button onClick={
          () => setIsLoggedIn(true)
        }>Login</button>
        }
        
        
      </div>
    )
  }



  export default Header