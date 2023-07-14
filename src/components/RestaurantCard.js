import { useContext, useState } from "react";
import { resImage } from "../config";
import UserContext from "../utils/UserContext";

const RestrauntCard = (restraunt) => {
  const { user } = useContext(UserContext);
  const { name, cuisines, cloudinaryImageId, avgRating } = restraunt.restraunt;
  return (
    <div className="w-56 p-5  bg-pink-50 m-3 shadow-md hover:bg-blue-200 hover:scale-105">
      <img src={`${resImage}/${cloudinaryImageId}`} />
      <h2 className="font-bold mt-1 text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
      <p>
        {user.name} - {user.email}
      </p>
    </div>
  );
};

export default RestrauntCard;
