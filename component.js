AFRAME.registerComponent('foo', {
  schema: {},
  init: function () {},
  update: function (oldData) {},
  tick: function (t, dt) {
    this.el.object3D.position.y -= dt/10000;
  },
  remove: function () {},
  pause: function () {},
  play: function () {}
});
