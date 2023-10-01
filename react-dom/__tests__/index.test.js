
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

  it('should render an element to the container', () => {
    root.render('Hello, world!');
    expect(container.innerHTML).toBe('<span>Hello, world!</span>');
  });

  it('should update the element when re-rendered', () => {
    root.render('Hello, world!');
    root.render('Goodbye, world!');
    expect(container.innerHTML).toBe('<span>Goodbye, world!</span>');
  });
});