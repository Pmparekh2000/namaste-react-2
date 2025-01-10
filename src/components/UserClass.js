import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // This is mandatory to enable accessing props inside render method
  }
  render() {
    const { name, location, userName } = this.props;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {userName}</h4>
      </div>
    );
  }
}

export default UserClass;
