## Q: Is JSX mandatory for React?

`No`, JSX is not mandatory for react. You can build application using native react method like `React.createElement()`. JSX is considered best practice due to its numerous advantages in terms of readability, expressiveness, and developer experience.

## Q: Is ES6 mandatory for React?
`No` It is not mandatory to use ES6 but a lot of react project use ES6 because it provide a lot of new feature like, Classes, Arrow Functions, Variables(let, const).



## Q: {TitleComponent} vs {<TitleComponent/>} vs
## {<TitleComponent></TitleComponent>} in JSX ?

The Difference is below:

`{TitleComponent}`

This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.

`{<TitleComponent/>}`

It represent a Component that return some JSX to render on screen.

`{<TitleComponent></TitleComponent>}`

The `{<TitleComponent></TitleComponent>}` and `{<TitleComponent/>}` they both are same. we use `{<TitleComponent/>}` when there is no Child component. And `{<TitleComponent></TitleComponent>}` when there are child components:
### Child Component Example:

```
<TitleComponent>

<ChildComponentOne/>
<ChildComponentTwo/>
    .
    .
    .
</TitleComponent>
```

## Q: How can I write comments in JSX?
To put comments inside JSX, you use the syntax {/* */} to wrap around the comment text.

## Q: What is <React.Fragment></React.Fragment> and <></> ?
A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. and `<></>` is shorthand of <React.Fragment></React.Fragment>.

### syntax

```
return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );

  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    <>
  );
```

## Q: What is Virtual DOM?
Virtual DOM is exact copy of Actual DOM that react kept in memory and synced with the “real” DOM by a library such as ReactDOM.


## Q: What is Reconciliation in React?
Reconciliation is react way of diffing the virtual DOM Tree with the  updated virtual DOM (`copy of virtual DOM`) to determine the most efficent way to updated the real DOM. This process allow react to apply the only necessay changes to DOM, avoid the costly operation of updating the entire DOM tree.
`This is done by Reconciliation Algorithm`.

## Q: what is React Fibre?
React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.  Because Fiber is asynchronous. The primary goal of React Fiber is to improve the performance and responsiveness of React applications, particularly for complex and interactive user interfaces.React can:

- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance

## Q: Why we need keys in React? When do we need keys in React?

It is a special attribute you need to include when creating list of elements in react. It is used to identify which item in list changed, update or delete.

## Q: Can we use index as keys in React?
`yes`, you can use index as key but it is `not considered best practice`. However, this can lead to issues if the order of items changes.

## Q: What is props in react?
props stands for properties. these passed into React components. props are used in React to pass data from one component to another. `(Parent to Child Component)`.

## Q: What is a Config Driven UI ?
It is technique that allow you to create dynamic and customizable UI without hard coding.
