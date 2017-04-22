AFRAME.registerComponent('velocity', {
  schema: {type: 'vec3'},
  tick: function(t, dt) {
    var position = this.el.getAttribute('position');
    this.el.setAttribute('position', {
      x: position.x + this.data.x,
      y: position.y + this.data.y,
      z: position.z + this.data.z
    });
  },
});
