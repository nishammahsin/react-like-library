
/**
 * Creates a root object that can be used to render an element to a container.
 * @param {HTMLElement} container - The container element to render the element to.
 * @returns {Object} An object with a `render` method that can be used to render an element to the container.
 */
  
const createRoot = function (container) {
    return {
      render: function (element) {
        container.innerHTML = '<span>' + element + '</span>';
      }
    };
  };

export { createRoot }