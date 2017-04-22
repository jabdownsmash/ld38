AFRAME.registerComponent('math', {
  multiple: true,
  schema: {
    input: {type: 'string'},
    operation: {type: 'string'},
    value: {default: 1},
    output: {type: 'string'}
  },
  init: function() {
    this.scaleFunction = this.scale.bind(this);
    this.el.addEventListener(this.data.input, this.scaleFunction);
  },
  scale: function(e) {
    var output = e.detail.value;
    if (this.data.operation == '*') {
      output *= this.data.value;
    } else if (this.data.operation == '/') {
      output /= this.data.value;
    } else if (this.data.operation == '+') {
      output += this.data.value;
    } else if (this.data.operation == '-') {
      output -= this.data.value;
    }
    this.el.emit(this.data.output, {value: output});
  }
});
