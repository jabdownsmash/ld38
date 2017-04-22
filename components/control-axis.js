AFRAME.registerComponent('control-axis', {
  schema: {
    positive: { type: 'string' },
    negative: { type: 'string' },
    scale: { type: 'number', default: 1},
    output: { type: 'string' },
  },
  init: function() {
    document.addEventListener( 'keydown', this.keyDown.bind(this), false );
    document.addEventListener( 'keyup', this.keyUp.bind(this), false );

    this.positiveHeld = 0;
    this.negativeHeld = 0;
    this.oldValue = 0;
  },
  keyDown: function(e) {
    if(e.keyCode == this.data.positive) {
      this.positiveHeld = 1;
    }
    if(e.keyCode == this.data.negative) {
      this.negativeHeld = -1;
    }
    this.checkValue();
  },
  keyUp: function(e) {
    if(e.keyCode == this.data.positive) {
      this.positiveHeld = 0;
    }
    if(e.keyCode == this.data.negative) {
      this.negativeHeld = 0;
    }
    this.checkValue();
  },
  checkValue: function() {
    var value = this.positiveHeld + this.negativeHeld;
    if (this.oldValue != value && this.data.output != '') {
      this.oldValue = value;
      this.el.emit(this.data.output, {value:(value * this.data.scale)});
    }
  },
});
