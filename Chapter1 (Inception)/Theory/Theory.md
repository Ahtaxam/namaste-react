
## what is Emmet?
Emmet is powerfull toolkit for web developer that improve the workflow when writing code in HTML and CSS. Emmet allow you to write HTML and CSS code using shortcuts and abbrevations.

##  Difference between a Library and Framework?
A **library** is a collection of reusable code that developer can call upon to perform some task or operations in their application. When using a library, developers maintain control over the application's flow, deciding when and where to invoke the library's functions within their code.
**You can use React in  your existing web project. React can be used to perform single task like to build header or footer only**

A **Framework** contains the basic flow and architecture of an application. Meaning developers write code following the framework's guidelines and structure, and the framework calls this code at specific points.

## What is CDN. and why do we use it ?
A CDN, or Content Delivery Network, is a network of servers strategically distributed across various geographic locations to deliver web content more efficiently to users. The primary purpose of using a CDN is to improve the performance, reliability, and availability of web content by reducing latency and distributing the load across multiple servers.

## Why is React known as React?
**React**, the popular JavaScript library for building user interfaces, is named "React" because of its core principle: **reactive programming**. The name reflects the library's ability to react to changes in data and update the user interface accordingly without the need for manual intervention or DOM manipulation.

## What is crossorigin in script tag?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
Web pages often make requests to load resources on other servers. Here is where CORS comes in.
It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

* A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain 

## What is diference between React and ReactDOM
React is library for building user-interface and reactDom also javaScript library  it allow react to interect with DOM. React package contain `React.createElement()` method an d other to build. while ReactDOM contain `ReactDOM.render()` method to render app into browser

## What is difference between react.development.js and react.production.js files via CDN?
The `react.development.js` file is tailored for development environments, offering  error messages and additional developer tools like React's warnings. This version is not minified or optimized, resulting in a larger file size and potential performance overhead due to its unoptimized code. 

The `react.production.js` file is designed for production environments, offering minified and optimized code that is clear from unnecessary whitespace, comments, and development features. This optimization leads to a smaller file size and faster loading times.

## What is async and defer? 
The **async** attribute loads and executes the script asynchronously `in background (when HTML is parsing)`, potentially before the HTML is fully parsed. 
### Syntax
```sh
<script src="async.js" async></script>
```

The **defer** attribute also loads the script asynchronously `in background (when HTML is parsing)` but ensures it waits until after the HTML parsing is complete. when HTML parsing complete then it execute script.
### Syntax
```sh
<script src="demo_defer.js" defer></script>
```