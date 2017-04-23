AFRAME.registerComponent('reader', {
  multiple: true,
  schema: {
    input: {type: 'string'},
    output: {type: 'string'},
    element: {type: 'selector'},
    attribute: {type: 'string'},
    property: {type: 'string'},
  },
  init: function() {
    this.inputFunction = this.input.bind(this);
    this.el.addEventListener(this.data.input, this.inputFunction);
  },
  input: function(e) {
    var element = this.el;
    if (this.data.element != null) {
      element = this.data.element;
    }
    var value = element.getAttribute(this.data.attribute);
    if (this.data.property != '') {
      value = value[this.data.property];
    }
    this.el.emit(this.data.output, {value: value});
  }
});
