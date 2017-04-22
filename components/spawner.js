AFRAME.registerComponent('spawner', {
  schema: {
    input:   {type: 'string'},
    mixin:   {type: 'string'},
    parent:  {type: 'selector'},
    inPlace: {type: 'boolean'},
  },
  init: function() {
    this.spawnFunction = this.spawn.bind(this);
    this.el.addEventListener(this.data.input, this.spawnFunction);
  },
  spawn: function() {
    var newElement = document.createElement('a-entity');
    newElement.setAttribute('mixin', this.data.mixin);
    var parent = this.el.parentNode;
    if (this.data.parent != null) {
      parent = this.data.parent;
    }
    parent.appendChild(newElement);
    
    if (this.data.inPlace) {
      //TODO: specify "world?"
      var threePosition = this.el.object3D.getWorldPosition();
      var position = {
        x: threePosition.x,
        y: threePosition.y,
        z: threePosition.z,
      };
      newElement.setAttribute('position', position);
    }

    //TODO: relativePosition = null?
    //if (this.data.relative) {
    //  var relativePosition = newElement.getAttribute('position');
    //  var position = this.el.getAttribute('position');

    //  newElement.setAttribute('position', {
    //    x: relativePosition.x + position.x,
    //    y: relativePosition.y + position.y,
    //    z: relativePosition.z + position.z,
    //  });
    //}
  },
  remove: function() {
    this.el.removeEventListener(this.data.input, this.spawnFunction);
  }
});

    
