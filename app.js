import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", name: "hi" },
  "Hello World from React JS 123"
);

const number = 1000;

const Title = () => {
  return <div id="heading">Title 🚀</div>;
};

const HeadingComponent = (props) => {
  console.log("Getting props as", props);

  return (
    <div>
      {Title()}
      <Title />
      <Title></Title>
      <h1>HeadingComponent</h1>
    </div>
  );
};

// console.log("jsxHeading is", jsxHeading);
// console.log("heading is", heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
