AFRAME.registerComponent('spawner', {
  schema: {
    input:   {type: 'string'},
    mixin:   {type: 'string'},
    parent:  {type: 'selector'}
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
  }
});

    
