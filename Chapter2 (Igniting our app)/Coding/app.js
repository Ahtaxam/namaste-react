import React from "react";
import ReactDOM from "react-dom"




const parent = React.createElement("div", {id:"heading"}, [
  React.createElement("h1", {}, "This is heading 1 parent 1 !"),
  React.createElement("h1", {}, "This is heading 2 parent 1")
])


const parent2 = React.createElement("div", {id:"heading"}, [
  React.createElement("h1", {}, "This is heading 1 parent 2"),
  React.createElement("h1", {}, "This is heading 2 parent 2")
]);


const container = React.createElement("div", {id:"container"}, [parent, parent2])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)