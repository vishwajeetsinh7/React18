import RestrauntCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

function filterSearch(list, searchText) {
  return list.filter((card) => card.data.name.includes(searchText));
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restraunts, setRestraunts] = useState(restaurantList);

  return (
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
            const filterData = filterSearch(restaurantList, searchInput);
            setRestraunts(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restraunts.map((restraunt) => {
          return (
            <RestrauntCard restraunt={restraunt.data} key={restraunt.data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
