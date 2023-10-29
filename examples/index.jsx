import { createRoot } from '../react-dom/index.js';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const app = () => {   
    return <div >
    <h1 >hello world</h1>
    <p>I am rendered from react-like-library</p>
    <div>
        <h2> hello h2</h2>
    </div>
    </div>
}

root.render(
    app
);



