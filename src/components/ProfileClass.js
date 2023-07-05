import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // create a state
    this.state = {
      count: 2,
    };
    console.log("1 Child Constructor Clsas");
  }

  componentDidMount() {
    console.log("2 Child component did mount");
  }

  render() {
    console.log("3 Childrender Class");
    return (
      <h1>
        Profile Class Component: {this.props.name}
        <span>Numbr:{this.props.number}</span>
        <i>count is {this.state.count}</i>
        <button
          onClick={() =>
            //! we don't mutate state directly
            //todo Never do this.state = something
            this.setState({
              count: 3,
            })
          }
        >
          ++Count
        </button>
      </h1>
    );
  }
}

export default ProfileClass;
