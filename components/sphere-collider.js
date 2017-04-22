// fires a collision event for every frame the objects
// are colliding, with 'layer' masking
AFRAME.registerComponent('sphere-collider', {
  schema: {
    radius: {type: 'number', default: 1},
    layer: {type: 'string'},
    collidesWith: {type: 'array'},
    output: {type: 'string', default: 'sphere-collider'},
  },
  init: function () {
    this.system.registerMe(this.el);
  },
  remove: function () {
    console.log("does this happen?");
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
    console.log("does this happen?");
    this.spheres.splice(this.spheres.indexOf(el), 1);
  },
  tick: function (t, dt) {
    //TODO: figure out why remove() doesn't work
    var toRemove = [];
    for (var i = 0; i < this.spheres.length; i++) {
      if (this.spheres[i].parentNode == null) {
        toRemove.unshift(i);
      }
    }
    for (var i = 0; i < toRemove.length; i++) {
      this.spheres.splice(toRemove[i],1);
    }

    for (var i = 1; i < this.spheres.length; i++) {
      for (var j = 0; j < i; j++) {
        var a = this.spheres[i].getAttribute('sphere-collider');
        var b = this.spheres[j].getAttribute('sphere-collider');
        a.position = this.spheres[i].object3D.getWorldPosition();
        b.position = this.spheres[j].object3D.getWorldPosition();

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
      var sqDist = (dx * dx + dy * dy + dz * dz);
      var radius = a.radius + b.radius;
      return (sqDist < radius * radius);
    }
    return false;
  }
});
