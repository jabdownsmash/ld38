AFRAME.registerComponent('velocity', {
  schema: {type: 'vec3'},
  tick: function(t, dt) {
    var position = this.el.getAttribute('position');
    this.el.setAttribute('position', {
      x: position.x + this.data.x * dt / 1000,
      y: position.y + this.data.y * dt / 1000,
      z: position.z + this.data.z * dt / 1000
    });
  },
});
