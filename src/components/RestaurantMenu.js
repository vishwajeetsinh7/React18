import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resImage } from "../config";
import Shimmer from "../components/Shimmer";
import useRestaraunt from "../utils/useRestaraunt";

import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

// useRestaraunt();

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = useParams();
  const restaurant = useRestaraunt(id);
  // console.log(restaurant);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

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
      <div className="btn">
        <button
          className="p-3 m-2 bg-green-500"
          onClick={() => handleAddItem(restaurant)}
        >
          AddToCart
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenu;
