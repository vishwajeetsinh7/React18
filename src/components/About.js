import { Outlet } from "react-router-dom";

import ProfileFunction from "./Profile";
import ProfileClass from "./ProfileClass";

import { Component } from "react";

const About2 = () => {
  return (
    <>
      <h1>About us</h1>
      <p>we are online service providing </p>
      <ProfileFunction name={"vishFunction"} number="1" />
      <ProfileClass name={"Vishclass"} number="3" />
    </>
  );
};

// class based parent component

class About extends Component {
  constructor(props) {
    super(props);
    console.log("1. parent constructor");
  }

  componentDidMount() {
    console.log("2. parent component didMount");
  }

  render() {
    console.log("3. parent render");
    return (
      <>
        <h1>About us</h1>
        <p>we are online service providing </p>
        <ProfileFunction name={"vishFunction"} number="1" />
        <ProfileClass name={"Vishclass"} number="3" />
      </>
    );
  }
}

export default About;
