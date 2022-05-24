## what is React ##
React is a component based front end librry, all parts of web application are divided into small components.

## Components ##
components is a small piece of the user interface. Every react.js application is a tree of components, components allow us to split the UI into independent reusable parts

## Why we need react?
Why react can allow all page loaded in a html。

React plays a major role in the most popular programming stack. Like MERN(a poppular javascript stack)

## What's the advantage of React?##
While we browsing the page, react updates what we see on a document object model(DOM), But we don't update the DOM directly like in html. React use a virtual dom.It's a lightweight representation of dom. Updating the virtual dom is much faster than updating the real dom.Thus react only update the page where the change was made instead of the entire page


## There are two types of components. ##
functional components and class-based components

- class based components(This is already the history of react.js)

```JavaScript
import React,{components} from 'React'
class Example extends Components{
    render ()
}
```

- Functional components (we build a function if we are using funcitonal components)

```JavaScript
import React from 'react' //This is no longer needed
const Example=() =>{ //This is a function
    return <div>This is a JSX object</div>
}
```
While talking about Functional components. The object the functional components return is a JSX object. Jsx is used in react to describle what the user interface should look like? It comes with the full power of javascript , jsx produces react elements, it form the core of react syntax.