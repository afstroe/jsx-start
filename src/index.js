var React = require("react");
var ReactDOM = require("react-dom");

const customStyle = {
  color: "red",
  fontSize: "40px",
  border: "1px solid black"
};
ReactDOM.render(
  <div>
    <h1 style={customStyle}> Hello world </h1>
    <p>This will crash the ReactDOM</p>
  </div>,
  document.getElementById("root")
);
