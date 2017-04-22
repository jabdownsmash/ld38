AFRAME.registerComponent('remover', {
  schema: {
    inputs: {type: 'array'},
  },
  init: function () {
    this.removeFunction = this.doRemove.bind(this);
    for (var i = 0; i < this.data.inputs.length; i++) {
      this.el.addEventListener(this.data.inputs[i], this.removeFunction);
    }
  },
  doRemove: function() {
    this.el.parentNode.removeChild(this.el);
  }
});
