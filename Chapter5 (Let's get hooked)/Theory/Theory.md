## Q: What is the difference between Named Export, Default export and * as export?

**Named exports** are used when a module needs to export multiple entities. Then import these using `{}` and with the same name that is used being exported.
## Example
**export**
```
export const a = 42;
export const MyComponent = () => {}
```

**import**
```
import {a, MyComponent} from "module"
```


**Default exports** are used when a module needs to export Single entities. You can import it with any name.

## Example

**export**
```
export default MyComponent = () => {}
```
you can import with any name and without curly braces

**import**
```
import Component from "module"
```

**In * export** it is used to export whole module as a component and access the component in imported module  

## Example
**export**
```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
```
**import**
```
import * as Component from "module"
<Component.MyComponent/>
<Component.MyComponent2/>
<Component.MyComponent3/>
```


# Q: What is the importance of config.js file?
The importance of a config.js file can vary depending on the context of its usage. In software development, particularly in web development, a config.js file is often used to store configuration settings for a web application or a JavaScript project. Here are a few reasons why it's important:

- Centralized configuration
- Security


# Q: What are React Hooks?
React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.

# Q: Why do we need a useState Hook?
The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.