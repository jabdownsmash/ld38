// fires a collision event for every frame the objects
// are colliding, with 'layer' masking
AFRAME.registerComponent('sphere-collider', {
  schema: {
    radius: {type: 'number', default: 1},
    layer: {type: 'string'},
    collidesWith: {type: 'array'},
    output: {type: 'string', default: 'collided'},
  },
  init: function () {
    this.system.registerMe(this.el);
  },
  remove: function () {
    this.system.unRegisterMe(this.el);
  }
});

AFRAME.registerSystem('sphere-collider', {
  init: function () {
    this.spheres = [];
  },
  registerMe: function (el) {
    this.spheres.push(el);
  },
  unRegisterMe: function (el) {
    this.spheres.splice(this.spheres.indexOf(el), 1);
  },
  tick: function (t, dt) {
    for (var i = 1; i < this.spheres.length; i++) {
      for (var j = 0; j < i; j++) {
        var a = this.spheres[i].getAttribute('sphere-collider');
        var b = this.spheres[j].getAttribute('sphere-collider');
        a.position = this.spheres[i].getAttribute('position');
        b.position = this.spheres[j].getAttribute('position');

        if (this.checkCollision(a, b)) {
          this.spheres[i].emit(a.output, {collidedWith: this.spheres[j]});
        }
        if (this.checkCollision(b, a)) {
          this.spheres[j].emit(b.output, {collidedWith: this.spheres[i]});
        }
      }
    }
  },
  checkCollision: function(a, b) {
    var doesCollide = false;
    if (a.collidesWith.length == 0)
    {
      doesCollide = true;
    }
    for (var i = 0; i < a.collidesWith.length; i++) {
      if (b.layer == a.collidesWith[i]) {
        doesCollide = true;
        break;
      }
    }
    if (doesCollide) {
      var dx = a.position.x - b.position.x;
      var dy = a.position.y - b.position.y;
      var dz = a.position.z - b.position.z;
      var dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      return (dist < a.radius + b.radius);
    }
    return false;
  }
});
