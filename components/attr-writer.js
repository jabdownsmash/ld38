AFRAME.registerComponent('attr-writer', {
  schema: {
    attribute: {type: 'string'},
    property: {type: 'string'},
    value: {type: 'string'},
    input: {type: 'string'}
  },
  init: function() {
    this.inputFunction = this.input.bind(this);
    this.el.addEventListener(this.data.input, this.inputFunction);
  },
  input: function() {
    if(this.data.property == '') {
      this.el.setAttribute(this.data.attribute, this.data.value);
    }
    else {
      this.el.setAttribute(this.data.attribute, this.data.property, this.data.value);
    }
  }
});
