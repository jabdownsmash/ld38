AFRAME.registerComponent('writer', {
  schema: {
    input: { type: 'string' },
    attribute: { type: 'string' },
    accessor: { type: 'string' },
  },
  init: function() {
    if (this.data.input != '') {
      this.el.addEventListener(this.data.input, this.write.bind(this));
    }
  },
  write: function(e) {
    if (this.data.attribute != '') {
      if (this.data.accessor != '') {
        var original = this.el.getAttribute(this.data.attribute);
        original[this.data.accessor] = e.detail.value;
        this.el.setAttribute(this.data.attribute, original);
      }
    }
  }
});
        
