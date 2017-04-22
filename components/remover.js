AFRAME.registerComponent('remover', {
  schema: {
    inputs: {type: 'array'},
  },
  init: function () {
    for (var i = 0; i < this.data.inputs.length; i++) {
      this.el.addEventListener(this.data.inputs[i], this.remove.bind(this));
    }
  },
  remove: function() {
    this.el.parentNode.removeChild(this.el);
  }
});
