import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaraunt = (id) => {
  const [restaurant, setRestaurant] = useState();

  //? get data from the API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`${FETCH_MENU_URL}=${id}`);
    const json = await data.json();
    console.log(json.data.cards[0]?.card?.card.info);
    setRestaurant(json.data.cards[0]?.card?.card.info);
  }
  return restaurant;
};

export default useRestaraunt;
