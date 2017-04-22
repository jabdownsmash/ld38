AFRAME.registerComponent('remover', {
  schema: {
    input: {type: 'string'},
  },
  init: function () {
    this.removeFunction = this.doRemove.bind(this);
    this.el.addEventListener(this.data.input, this.removeFunction);
  },
  doRemove: function() {
    if(this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
  },
  remove: function() {
    this.el.removeEventListener(this.data.input, this.removeFunction);
  }
});
