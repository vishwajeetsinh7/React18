import RestrauntCard from "./RestaurantCard";
// import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterSearch } from "../utils/helper";

const Body = () => {
  const [allRestaurants, setAllResturants] = useState([]);
  const [filterdRestraunts, setFilteredRestraunts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // useEffect is callback function
  /* this meanns it's not called immediatley it's calle whenever
  useeffect wants it's to call */

  useEffect(() => {
    // console.log('useEfx')
    getRestaurants();
  }, []);
  // console.log('rdr')

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestraunts(json?.data?.cards[2]?.data?.data?.cards);
  }

  /* //! CONDITIONAL RENDREING
      IF RESTRORANT IS IS EMPTY ==> sHIMMER UI
      IF RESTRO HAS DATA THEN LOAD ACTUAL DATA UI
  */

  //todo not return component (EearlY Return )
  if (!allRestaurants) return null;
  if (filterdRestraunts.length === 0 && allRestaurants?.length !== 0)
    return <h1>Not Restru Match your Resutl</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            const filterData = filterSearch(allRestaurants, searchInput);
            setFilteredRestraunts(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterdRestraunts.map((restraunt) => {
          return (
            <Link
              to={"/restaurant/" + restraunt.data.id}
              key={restraunt.data.id}
            >
              {" "}
              <RestrauntCard restraunt={restraunt.data} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
