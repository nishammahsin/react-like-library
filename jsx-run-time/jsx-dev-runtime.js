
const createElement = function (tag, { children, ...props } = {}) {
  const element = document.createElement(tag);
  if (props) {
    for (const prop in props) {
      element[prop] = props[prop];
    }
  }

  if (Array.isArray(children)) {
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof HTMLElement) {
        element.appendChild(child);
      }
    });
  } else if (typeof children === 'string') {
    element.appendChild(document.createTextNode(children));
  } else if (children instanceof HTMLElement) {
    element.appendChild(children);
  }

  return element;
};


export const jsxDEV = createElement;

