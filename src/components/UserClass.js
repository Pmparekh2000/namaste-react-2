import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // This is mandatory to enable accessing props inside render method
    this.state = {
      count: 10,
      name1: "Siddhi",
    };
  }
  render() {
    const { name, location, userName } = this.props;
    const { count, name1 } = this.state;
    const updateName = (newName) => {
      this.setState(
        {
          //   ...this.state,
          //   name1: this.state.name1 + " " + newName,
          count: this.state.count + 1,
        },
        () => {
          console.log("Calling the callback function");
        }
      );
    };
    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <h2>
          Name: {name} - {name1}
        </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {userName}</h4>
        <button onClick={() => updateName("Rekha")}>Update Name</button>
      </div>
    );
  }
}

export default UserClass;
