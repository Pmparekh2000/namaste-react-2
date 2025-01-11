import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // This is mandatory to enable accessing props inside render method
    this.state = {
      count: 10,
      name1: "Siddhi",
      githubData: null,
    };
  }

  async componentDidMount() {
    const readableStream = await fetch(
      "https://api.github.com/users/pmparekh2000"
    );
    const data = await readableStream.json();
    this.setState({
      githubData: data,
    });
    console.log("From componentDidMount");
  }

  componentDidUpdate() {
    console.log("Called componentDid Update");
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
        <h1>Count = {this.state.githubData?.name}</h1>
        <h2>{this.state.githubData?.login}</h2>
        <h3>Location: {this.state.githubData?.url}</h3>
        <h4>Contact: {this.state.githubData?.type}</h4>
        <button onClick={() => updateName("Rekha")}>Update Name</button>
      </div>
    );
  }
}

export default UserClass;
