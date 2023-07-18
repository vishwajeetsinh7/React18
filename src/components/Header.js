import { useEffect, useState, useContext } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  return false;
};

const Title = () => (
  <Link to="/">
    <img src={logo} width="100px" alt="loogo" className="w-44 px-2" />
  </Link>
);

/* Way two of writing react component*/

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  const { user } = useContext(UserContext);

  // console.log('renderrrr')
  return (
    <div className="flex py-3 px-3 justify-between items-center bg-pink-50 drop-shadow-lg sm:bg-pink-950 md:bg-yellow-900">
      <Title />
      <div className="">
        <ul className="flex">
          <li>
            <Link to="/" className="px-3">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="px-3">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="px-3">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/instamart" className="px-3">
              Instamart
            </Link>
          </li>
          <Link to="/cart">
            <li className="px-3">Cart -{cartItem.length} Items</li>
          </Link>
        </ul>
      </div>

      <h1>{isOnline ? "✅" : "❌"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
