
import { createRoot } from '../react-dom/index.js';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const app = () => {   
    return <div >
        <h1>hello world</h1>
        <p> hello</p>
    </div>
}

root.render(
    app
);



