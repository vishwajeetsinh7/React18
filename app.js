import React from "react";
import ReactDOM from "react-dom/client";
import logo from './logo.png'
import t from './resobj'

const allCard  = restCards.cards

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
const HeaderComponent = () => (
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

const burgerKing = { 
  name: 'Burger King', 
  image: logo, 
  cusines: ['Burger', 'American'], 
  rating: 4.2
}
const nam = burgerKing.name

const RestrauntCard = (restraunt) => {
  
  const {name, cuisines, cloudinaryImageId, avgRating} = restraunt.restraunt
  console.log(restraunt)
  return ( 
    <div className="card">
      <img 
      src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
       width="100%"/>  
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  )
}

const Body = () => { 
  return (
    <div className="restaurant-list">
      {
        allCard.map( (restraunt, index) => { 
          return <RestrauntCard restraunt={restraunt.data} key={restraunt.data.id} />
        })
      }
    </div>
  )
}

const Footer = () => { 
  return (
    <h3>Footer</h3>
  )
}


const AppLayout = () => { 
    return (
      <React.Fragment>
        <HeaderComponent/>
        <Body/>
        <Footer/>
      </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root.
root.render(<AppLayout />);
