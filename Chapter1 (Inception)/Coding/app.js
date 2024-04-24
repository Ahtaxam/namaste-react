// manipulate the DOM using JS

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello Everyone: Namaste React by Akshay Saini"

// const root = document.getElementById("root");

// root.appendChild(heading)

// <----------------------------------------------- >

// manipulate the DOM Using React CDN


// createElement() take three arguments first HTML element, second id (we use for styling) and third "text" we want to render if other HTML element
// pass it as below
const parent1 = React.createElement("div", { id: "parent1" }, [
  React.createElement("h1", { id: "heading" }, "This is Heading of parent 1"),
  React.createElement(
    "h1",
    { id: "heading" },
    "This is Sibling Heading of parent 1"
  ),
]);

const parent2 = React.createElement("div", { id: "parent2" }, [
  React.createElement("h1", { id: "heading" }, "This is Heading of parent 2"),
  React.createElement(
    "h1",
    { id: "heading" },
    "This is Sibling Heading of parent 2"
  ),
]);

const container = React.createElement("div", { id: "container" }, [
  parent1,
  parent2,
]);
const rootDiv = ReactDOM.createRoot(document.getElementById("root"));

rootDiv.render(container);
