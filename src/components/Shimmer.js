const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="shimmer-restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
