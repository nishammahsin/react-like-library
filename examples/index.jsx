
import { createRoot } from '../react-dom/index.js';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const app = () => {   
    return <div>
        <h1>hello world</h1>
    </div>
}

root.render(
    app
);






