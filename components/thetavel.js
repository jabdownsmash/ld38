AFRAME.registerComponent('thetavel', {
  schema: {type: 'vec3'},
  tick: function(t, dt) {
    var rotation = this.el.getAttribute('rotation');
    this.el.setAttribute('rotation', {
      x: rotation.x + this.data.x * dt / 1000,
      y: rotation.y + this.data.y * dt / 1000,
      z: rotation.z + this.data.z * dt / 1000
    });
  },
});
