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
        this.nodes[i].className = className;
      }
  }

  removeClass (){

  }


}

  module.exports = DOMNodeCollection;
