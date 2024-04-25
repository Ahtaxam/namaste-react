// ** React.createElement **
// const element = createElement(type, props, ...children)
// it return javaScript Object or React Element
import React from "react";
import ReactDOM from "react-dom/client"
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React "
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// while rendering this is responsible of render to convert object into browser readable html tag
root.render(heading);

// ReactElement(Object) ==> HTML (Browser readable)






// Example

{
  /* <div id="parent">
        <div id="child">
            <h1>i am heading 1</h1>
            <h1>i am heading 2</h1>
        </div>
        <div id="child2">
            <h1>i am heading 1</h1>
            <h1>i am heading 2</h1>
        </div>
    </div> */
}

// const sibling = React.createElement("h1", {}, "i'm sibling of h1")
// const heading1 = React.createElement("h1", {}, "Hello namaste react!");
// const child = React.createElement("div", {id:"child"}, [heading1, sibling])
// const parent = React.createElement("div", {id:"parent"}, child);

                // OR

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i'm h1 of child1"),
    React.createElement("h1", {}, "i'm h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i'm h1 of child2"),
    React.createElement("h1", {}, "i'm h2 of child2"),
  ]),
]);

console.log(parent);
// console.log(heading1);

// any thing in root written will be replaced by root.render() content
root.render(parent);




// React is library bcoz it can work independentally on a small portion of your website