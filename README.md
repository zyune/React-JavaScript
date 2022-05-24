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

## Tips for react
1. package json. You can see all dependencies or packages that your application is currently installed. The core react.js package are ```react```, ```react-dom```,```react-scripts```.
2. The other npm packages that you installed latter on will be added in ```package.json``` as well. The code of those package will be in node_modules.
3. we do most of our development work in src folder . In public folder, we can only see one index.html. There is only a single div with the id of root.All of our components are going to get injected inside of this div
```html
// index.html
<div id='root'></div>
```
4. src/index.js ----> This is the starting point of every react.js application. We have react DOM in index.js. And we only call it once in our entire react application, no m atter how big it is. React dom is used to render our components and our entire application into the real dom.More specifically, into a div with an id of root.

** This is how the react dom in index.js looks like.**
```JavaScript
// index.js
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```
