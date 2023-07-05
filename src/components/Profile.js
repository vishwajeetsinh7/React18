import { useEffect, useState } from "react";

const ProfileFunction = (props) => {
  const [count, setCount] = useState(2);

  return (
    <div>
      <h1>this is functionals component</h1>
      <p>
        {props.name} Number {props.number}
      </p>
      <h1>Count is :{count} </h1>
      <button
        onClick={() => {
          setCount(count * count);
        }}
      >
        +count
      </button>
    </div>
  );
};

export default ProfileFunction;
