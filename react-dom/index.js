
/**
 * Creates a root object that can be used to render an element to a container.
 * @param {HTMLElement} container - The container element to render the element to.
 * @returns {Object} An object with a `render` method that can be used to render an element to the container.
 */
  
const createRoot = function (container) {
    return {
      render: function (creatEelement) {
        const html = creatEelement();
        container.appendChild(html);
      }
    };
  };

export { createRoot }

