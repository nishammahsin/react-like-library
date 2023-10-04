in the previouse chapter we have seen 
```javascript
const Component = (props) => {
  return <div id="root">Hello world</div>;
};
```
is equivalent to the following code:
```javascript
const Component = (props) => {
  return React.createElement('div', {id: 'root'}, 'Hello world');
};
```

but how does this actually tranforming JSX to js?

We discussed that we can use babel to compile JSX to js .

in this chapter we will see how to configure babel to achieve this.

We can use following babel plugin to compile JSX to js.

```javascript
https://babeljs.io/docs/babel-plugin-transform-react-jsx
```
we can specify our own "importSource" to import our createElement function.

we dont have a `jsx()` function yet, we will write a dummy function for now.

```javascript
const jsx = (type, props, ...children) => {
  console.log(type, props, children);
  return null
};
```

we can use following babel config to compile JSX to js.

```javascript
{
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "importSource": "../jsx-run-time"
      }
    ]
  ]
}
```

Adding the above config to babel.config.json will compile JSX to js.

```javascript
const Component = (props) => {
  return <div id="root">Hello world</div>;
};
```
if you run npm run build you will see following output.
just like we discussed in the previous chapter.
```javascript
const Component = (props) => {
  return jsx('div', {id: 'root'}, 'Hello world');
};
```


Tip: you can use folowing vite config to see unminified output.


```javascript
//vite.config.js
export default defineConfig({
  build: {
    minify: false,
  },
});
```

since we are using vite , we dont have to config babels plugins manually.
@vite/react plugin will take care of it for us.

see the following vite config.
```javascript
//vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [
        react({ jsxImportSource: '../jsx-run-time',  })
    ],
    build: {
      minify: false,
    },
  });

  
 here we have specified our own "jsxImportSource" to import our jsx function in `../jsx-run-time` file.
 there should be a jsx function exported in `../jsx-run-time` file.

 ```javascript
    //jsx-run-time.js
    export const jsx = (type, props, ...children) => {
    console.log(type, props, children);
    return null
    };
```

after all this setup do 
`npm run build`
and you will see out jsx is tranformed to javascript functions.


we will complete the jsx() function in the next chapter.
Happy Learning.