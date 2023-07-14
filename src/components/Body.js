import RestrauntCard from "./RestaurantCard";
// import { restaurantList } from "../config";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterSearch } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [allRestaurants, setAllResturants] = useState([]);
  const [filterdRestraunts, setFilteredRestraunts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { user, setUser } = useContext(UserContext);

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

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Pleaase check your InterNet connection</h1>;
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
      <div className="p-5 bg-pink-50">
        <input
          className="p-2 border-2 rounded-md border-purple-300 focus:bg-cyan-50"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="p-2 bg-purple-600 rounded-md ml-2 text-white hover:bg-red-300"
          onClick={(e) => {
            const filterData = filterSearch(allRestaurants, searchInput);
            setFilteredRestraunts(filterData);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: "newname@gmail.com",
            })
          }
        />
      </div>
      <div className="flex flex-wrap w-full max-w-7xl m-auto">
        {filterdRestraunts.map((restraunt) => {
          return (
            <Link
              to={"/restaurant/" + restraunt.data.id}
              key={restraunt.data.id}
            >
              <RestrauntCard restraunt={restraunt.data} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
