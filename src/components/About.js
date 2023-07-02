import { Outlet } from "react-router-dom";

import ProfileFunction from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <>
      <h1>About us</h1>
      <p>we are online service providing </p>
      <ProfileFunction name={"vishFunction"} number="1" />
      <ProfileClass name={"Vishclass"} number="3" />
    </>
  );
};

export default About;
