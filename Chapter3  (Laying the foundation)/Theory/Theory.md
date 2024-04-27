
## Q: What is JSX?
JSX is javaScript XML. it's syntax extension for javaScript. JSX allow developer to write HTML code in javascript and placed then directly into code. 

### Example: using JSX
```
const heading = <h1>This is heading </>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

### Example: without JSX
```
const heading = React.createElement('h1', {}, 'This is Heading');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```


## Q: Superpowers of JSX ?
using JSX you can write markup inside javaScript also support for component-based development. It is easy to maintain and debug.

## Q: Role of type attribute in script tag? What options can I use there?

The HTML <script> `Type` tag  is used to specify the `media type` of script and identify the content of the tag. It has a Default value which is `“text/javascript”`.

### Syntax:
```
<script type="text/javascript">
    // JavaScript code
</script>
```

## Other options:

- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.


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

