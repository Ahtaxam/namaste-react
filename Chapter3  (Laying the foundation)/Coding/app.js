import React from "react";
import ReactDOM from "react-dom/";

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)

// const container = React.createElement("div", {className:"title"} ,[
//     React.createElement("h1", {id:"heading1"}, "This is heading 1"),
//     React.createElement("h1", {id:"heading2"}, "This is heading 2"),
//     React.createElement("h1", {id:"heading3"}, "This is heading 3")
// ])
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container)


// --------------------------------------------------------------------------------------------------

// Create the same element using JSX
// const header = (
//     <div>
//         <h1>This is Heading 1!</h1>
//         <h1>This is Heading 2</h1>
//         <h1>This is Heading 3</h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header)





// --------------------------------------------------------------------------------------------------


// Create a functional component of the same with JSX

// const Header = () => (
//   <div className="title">
//     <h1>This is Heading 1</h1>
//     <h1>This is Heading 2</h1>
//     <h1>This is Heading 3</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header/>);



// --------------------------------------------------------------------------------------------------



// Pass attributes into the tag in JSX

// const Header = () => (
//   <div className="title">
//     <h1 style={{color:"blue"}}>This is Heading 1</h1>
//     <h1 style={{color:"green"}}>This is Heading 2</h1>
//     <h1 style={{color:"GrayText"}}>This is Heading 3</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header/>);




// --------------------------------------------------------------------------------------------------



// Composition of Component(Add a component inside another)

// const Heading1 = () => (
//     <h1>This is Heading1 Component</h1>
// )

// const Header = () => (
//   <div className="title">
//     <Heading1/>
//     <h1 style={{color:"green"}}>This is Heading 2</h1>
//     <h1 style={{color:"GrayText"}}>This is Heading 3</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header/>);






// --------------------------------------------------------------------------------------------------


// {TitleComponent} vs {<TitleComponent/>} vs
// {<TitleComponent></TitleComponent>} in JSX


// const TitleComponent = (
//     <h1>Simple variable: This is react element</h1>
// )

// const TitleComponent = () => (
//     <h1>This Is component</h1>
// )



// const Heading = () => (
//     <h1>This is heading...</h1>
// )

// const TitleComponent = () => (
//     <div>
//         <Heading/>
//     </div>
// )

// const Header = () => (
//     <div>
//         {<TitleComponent/>}
//         {TitleComponent()}
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header/>);






// --------------------------------------------------------------------------------------------------



// Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice





import "./index.css";
import logo from "./logo.avif";
import userIcon from "./user.jpg";

const Header = () => {
    return (
      <>
        <header className="header">
          <div className="left">
            <img src={logo} alt="Logo" />
          </div>
          <div className="center">
            <input
              className="input"
              type="text"
              placeholder="Search anything you want..."
            />
            <button type="submit">
              Search
            </button>
          </div>
          <div className="right">
            <img src={userIcon} alt="User Icon" />
          </div>
        </header>
      </>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Header />); // we can also write like this for functional component root.render(Header())