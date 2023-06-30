  import { useEffect, useState } from 'react';
  import logo from '../assets/img/logo.png'
  import { Link } from 'react-router-dom';

  const loggedInUser = () => { 
    return false
  }

  const Title = () => (
      <Link to="/">
      <img
          src={logo}
          width="100px"
          alt="loogo"
          />

      </Link>
      );




    
    /* Way two of writing react component*/

    const Header = () => { 
      const [isLoggedIn, setIsLoggedIn] = useState(false)

      // console.log('renderrrr')
      return    (    
        <div className="header">
          <Title />
          <div className="nav-items">
              <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">
                    Contact
                    </Link>
                  </li>
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