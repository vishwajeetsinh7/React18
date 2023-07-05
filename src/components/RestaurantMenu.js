import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resImage } from "../config";
import Shimmer from "../components/Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = useParams();
  console.log(id);

  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=${id}`
    );
    const json = await data.json();
    console.log(json.data.cards[0]?.card?.card.info);
    setRestaurant(json.data.cards[0]?.card?.card.info);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restraunt Id: 123</h1>
      <h2>Name</h2>
      <h2>{restaurant.name}</h2>
      <img src={`${resImage}/${restaurant.cloudinaryImageId}`} />
      <ul>
        <li>{restaurant?.areaName}</li>
        <li>{restaurant.city}</li>
        <li>{restaurant.avgrating} Stars</li>
        <li>{restaurant.costForTwoMessage} </li>
        <li>{restaurant.avgrating} </li>
      </ul>

      <div>
        <h1>Menus</h1>
      </div>
    </div>
  );
};

export default RestaurantMenu;
