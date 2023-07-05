import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resImage } from "../config";
import Shimmer from "../components/Shimmer";
import useRestaraunt from "../utils/useRestaraunt";

// useRestaraunt();

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = useParams();

  const restaurant = useRestaraunt(id);
  console.log(id);

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
