



import { createRoot } from '../index.js';
import { JSDOM } from 'jsdom';

describe('createRoot', () => {
  let container;
  let root;

  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  global.window = dom.window;
  global.document = dom.window.document;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it('should return an object with a render method', () => {
    expect(root.render).toBeDefined();
  });

  it('should render an element to the container', () => {
    root.render(() => {
      const span = document.createElement('span');
      span.textContent = 'Hello, world!';
      return span;
    });
    expect(container.innerHTML).toBe('<span>Hello, world!</span>');
  });

});
