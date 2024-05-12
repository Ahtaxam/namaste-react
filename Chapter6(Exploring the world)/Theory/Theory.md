## Q: What is the difference between Monolith and Microservice?

Thses are two different approaches for building and designing the software.

**`Monolith`**
- in this architecture an entire application is designed as a single, self-contained unit.
- All components of an application like UI, business logic and data access layers are integrated and deployed together.
- it is simple to manage and deploy for small applications.



**`Microservices`**
- in this Application is broken down into smaller independent services , each is responsible for a specific function.
- Ecah service operate as a single application with its own UI and data-access layers and communicate with other service via API.
- it enable scalability and flexibility as each service can be managed and deployed seperately.

## Q: Why do we need a useEffect Hook?
It is react hook and allow functional component to handle side effect like, data fetching, DOM manipulation etc.. . side effect are operations that occur outside of rendering process. 

`Syntax`
```
useEffect(() => {}, [])
```

The `Second Parameter` is dependency on which it depend. if empty only run one-time. if provided then will run whenever dependency changed.

## Q: What is Optional Chaining?
Optional Chaining `?.` it allow you to safely access nested properties of an object without to check id level of the chain is defined or not.

## Q: What is Shimmer UI?
It is best way of `showing loading state of an application.` it enhance user experience. in this when actual data is loading then we show fade-card that is similar to actual card.

## Q: What is the difference between JS expression and JS statement?

`Js Expression`

An expression is any valid unit of code that produces a value.

`Example`:
```
1+2
console.log("Hello)
```


`Js Statement`

A statement is a complete line of code that performs some action. It can include expressions, but it doesn't necessarily produce a value.

`Example`:
```
let x=10 // variable declaration
function myFun(){...} // function call
if, while, for // control flow statement
```


## Q: What is Conditional Rendering, explain with a code example?
In react it's ability to render different components or elements based on certain condition.

**`Example`**

```
{isLoggedIn ? (return <HomePage />) : (return <Login />)};

```

## Q: What is CORS?
CORS stands for `Cross-Origin Resource Sharing.` It's a security feature implemented by web browsers to restrict web pages from making requests to a different origin.

## Q: What is async and await?
it is feature introduce in JS to make asynchronous code simple.
`async` it is used to make a function asynchronous and it will return a promise.

`await` it is used to wait untill promise is not settled.

