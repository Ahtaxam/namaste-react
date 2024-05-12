## Q: What are various ways to add images into our App? Explain with code examples

Using url of an image

```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

Place it into assets folder and import from to your component

```
import logo from "../../assets/images/logo.png";
export default function App() {
  return <img src={logo} alt="react logo" />
}
```
## Q: What would happen if we do console.log(useState())?

If we  console.log(useState()), we get an array [undefined, function] where first item in an array is state is undefined and the second item in an array is setState function to set State value.



## Q: How will useEffect behave if we don't add a dependency array ?

if we don't add dependency useEffect will run everytime a component is rederend or re-rendered.

## Q: What is SPA?
A `Single page application` that allow you to dynamically update the data on web page without reloading or refreshing the page.


## Q: What is difference between Client Side Routing and Server Side Routing?

In `Server Side Routing` everytime a URL is changed, a network request is made to server to fetch webpage and replace it with older.

In `Client Side Routing` during first load the whole webapp is loaded from server. when we change the routing library navigate user to that page and load data to that component without making network request.
