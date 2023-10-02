[]: # Topic: JSX
[]: # Chapter: 2

JSX is a powerful syntax extension to JavaScript that allows you to write HTML-like code in your JavaScript files.
But browsers don't understand JSX directly, so it needs to be compiled into plain JavaScript. 
In this blog post, I'll show you how we can actually compile JSX to js.
Let's get started!

```javascript
const Component = (props) => {
  return <div id="root">Hello world</div>;
};
```

if you were to run this code in the browser, you would get an error saying that JSX is not defined.
This is because browsers don't understand JSX directly, so it needs to be compiled into plain JavaScript.
if you were to run this with Actual React library, it would work fine.

the above code is equivalent to the following code:

```javascript
const Component = (props) => {
  return React.createElement('div', {id: 'root'}, 'Hello world');
};
```

but how does this work?
either way, we need to compile JSX to js using babel or any other tool or we can write our own version of a JSX parser that can turn a JSX “component” into a JavaScript one that actually returns valid HTML.

for this, lets use babel to compile JSX to js so that we can focus on writing other main fetaures of react-like-library.

```javascript

we also need to createElement function to create element from JSX.

What you get back from a React.createElement call is actually a simple object that describes the element you want to create.
It has a type property that tells you what kind of element it is (in this case, a div), and it has a props property that contains all the attributes you want to set on the element.
Finally, it has a children property that contains all the children of the element.

```javascript
const element = {
  type: 'div',
  props: {
    id: 'root',
    children: 'Hello world',
  },
};
```

we will cover how to write createElement from JSX in the coming chapters.
we will also discuss how we can compile JSX to js using babel or any other tool.

Happy Learning!

