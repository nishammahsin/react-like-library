import { createRoot } from '../react-dom/index.js';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const app = '<div>Hello world</div>'

root.render(
    app
);






