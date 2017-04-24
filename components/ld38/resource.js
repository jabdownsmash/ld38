AFRAME.registerComponent('resource', {
  multiple: true,
  schema: {
    value: {type: 'number'},
    output: {type: 'string'},
  },
  update: function(old) {
    if (this.data.output) {
      if(this.data.value <= 0) {
        location.reload();
      }
      this.el.emit(this.data.output, {value: this.data.value});
    }
  }
});
