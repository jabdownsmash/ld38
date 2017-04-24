AFRAME.registerComponent('logger', {
  multiple: true,
  schema: { type: 'string' },
  init: function () {
    this.el.addEventListener(this.data, this.log);
  },
  log: function(e) {
    console.log(e.detail);
  }
});
