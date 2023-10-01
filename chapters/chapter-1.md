
# ReactDom/createRoot

The code is a simple implementation of the `createRoot` function that takes a `container` as an argument and returns an object with a render method. 
The render method takes an element as an argument and sets the `innerHTML` of the container to a string that contains the element wrapped in a `span` tag.

```javascript
const createRoot = function (container) {
    return {
      render: function (element) {
        container.innerHTML = '<span>' + element + '</span>';
      }
    };
};

export { createRoot }
```
Here’s what the code does step by step:

The `createRoot`` function takes a `container` as an argument.

The function returns an object with a single method called `render`.

The `render` method takes an `element` as an argument.

currently render method is very simple. it will only render the element as a string.
The `render` function won’t be able to render `JSX`.
However, this will be covered in the coming chapters.


Please note that this is not the final code and is just meant to be a starting point.


## usage

```shell  
npm i react-like-library
```

```javascript
import { createRoot } from 'react-like-library/react-dom';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const app = "<h1>Hello World</h1>";
root.render(app);
```


## Testing

Please refere [unit Tests](../react-dom/__tests__) for unit tests code of ```createRoot``` function.

currently we have only few test cases for ```createRoot``` function.

those are very simple test cases.
we will add more test cases in the coming chapters as we add more features to the  ```createRoot``` function.