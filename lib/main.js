const DOMNodeCollection = require ("./dom_node_collection.js");

window.$l = (selector) =>  {
  let elementArray;
  if (selector instanceof HTMLElement) {
    // elementArray = Array.from(arguments);
    elementArray = [selector];
  } else {
    elementArray = Array.from(document.querySelectorAll(selector));
  }
  return new DOMNodeCollection(elementArray);
};
// window.$l = $l;
