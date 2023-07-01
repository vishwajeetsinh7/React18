import { resImage } from "../config";

const RestrauntCard = (restraunt) => {
  const { name, cuisines, cloudinaryImageId, avgRating } = restraunt.restraunt;
  return (
    <div className="card">
      <img
        src={`${resImage}/${cloudinaryImageId}`}
        width="100%"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestrauntCard;
