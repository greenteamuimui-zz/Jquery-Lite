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
    for (let i = 0; i < this.nodes.length; i++) {
      this.html(object.outerHTML());
    }
  }

  attr () {

  }

  addClass () {

  }

  removeClass (){

  }


}

  module.exports = DOMNodeCollection;
