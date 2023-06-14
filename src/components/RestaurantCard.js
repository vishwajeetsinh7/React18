const RestrauntCard = (restraunt) => {
  const { name, cuisines, cloudinaryImageId, avgRating } = restraunt.restraunt;
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        width="100%"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestrauntCard;
