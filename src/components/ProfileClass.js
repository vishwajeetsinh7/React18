import React from "react";
import UserContext from "../utils/UserContext";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // create a state
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "somehwer",
      },
    };
    // console.log("1 Child Constructor Clsas" + " " + this.props.number);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vishwajeetsinh7");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
    // console.log("2 Child component did mount" + " " + this.props.number);

    // this.timer = setInterval(() => {
    //   console.log("vishwajeet");
    // }, 1000);
  }

  componentWillUnmount() {
    // console.log("it will unmount ");
    clearInterval(this.timer);
  }

  render() {
    // console.log("3 Childrender Class" + " " + this.props.number);
    return (
      <div>
        <h1>Name: {this.state.userInfo.name}</h1>
        <h2>Location: {this.state.userInfo.location}</h2>
        <button
          onClick={() =>
            //! we don't mutate state directly
            //todo Never do this.state = something
            this.setState({
              count: 3,
            })
          }
        >
          ClassbaswedCompinbe
        </button>
        <UserContext.Consumer>
          {({ user }) => <h1 className="text-3xl bg-red-600">{user.name}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default ProfileClass;
