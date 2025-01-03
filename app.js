import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "h1-tag" },
      "Hello from h1 tag from child1"
    ),
    React.createElement(
      "h2",
      { id: "h2-tag" },
      "Hello from h1 tag from child1"
    ),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "h1-tag" },
      "Hello from h1 tag from child2"
    ),
    React.createElement(
      "h2",
      { id: "h2-tag" },
      "Hello from h1 tag from child2"
    ),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", name: "hi" },
  "Hello World from React JS 123"
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);
