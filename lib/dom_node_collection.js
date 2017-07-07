class DOMNodeCollection {
  constructor (nodes) {
    this.nodes = nodes;
  }

  html(str) {
    if (str) {
      for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].innerHTML = str;
      }
    } else {
        return this.nodes[0].innerHTML;
    }
  }

  empty() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].html("");
    }
  }

  append(object) {
    if (!(typeof object === "string")) {
      for (let i = 0; i < this.nodes.length; i++) {
        console.log(this.nodes[i]);
        this.nodes[i].appendChild(object.outerHTML());
      }
    } else {
      for (let i = 0; i < this.nodes.length; i++) {
        console.log(this.nodes[i]);

        this.nodes[i].innerHTML += object;
      }
    }
  }

  attr (attributeName, value) {
    let ans;
    for (let i = 0; i < this.nodes.length; i++) {
      if (value) {
        this.nodes[i].setAttribute(attributeName, value);
        ans = this.nodes;
      } else {
        for (let j = 0; j < this.nodes.length; j++) {
          if (this.nodes[j].getAttribute(attributeName)) {
            ans = this.nodes[j].getAttribute(attributeName);
            break;
          }
        }
      }
      return ans;
    }
  }

  addClass (className) {
    for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].classList.add(className);
      }
  }

  removeClass (className){
    for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].classList.remove(className);
      }
  }

  children () {
    let children = [];
    for (var i = 0; i < this.nodes.length; i++) {
      children = children.concat(Array.from(this.nodes[i].children));
    }
    return new DOMNodeCollection(children);
  }


  parent () {
    let parent = [];
    for (var i = 0; i < this.nodes.length; i++) {
      parent.push(this.nodes[i].parentNode);
    }
    return new DOMNodeCollection(parent);
  }

  find (selector) {
    let container = [];
    for (var i = 0; i < this.nodes.length; i++) {
      container = container.concat(Array.from(this.nodes[i].querySelectorAll(selector)));
    }
    return new DOMNodeCollection(container);
  }

  remove () {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].innerHTML = "";
    }
    this.nodes = [];
  }

  on (action, callback) {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].addEventListener(action, callback);
      this.nodes[i].setAttribute("callback", callback);
    }
  }

  off (action) {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].removeEventListener(action, this.nodes[j].getAttribute("callback"), null);
    }
  }




}

  module.exports = DOMNodeCollection;
