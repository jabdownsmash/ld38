AFRAME.registerComponent('attr-writer', {
  schema: {
    attribute: {type: 'string'},
    value: {type: 'string'},
    input: {type: 'string'}
  },
  init: function() {
    this.inputFunction = this.input.bind(this);
    this.el.addEventListener(this.data.input, this.inputFunction);
  },
  input: function() {
    console.log(this.data.attribute, this.data.value);
    this.el.setAttribute(this.data.attribute, this.data.value);
  }
});
