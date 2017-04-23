AFRAME.registerComponent('timer', {
  schema: {
    tickRate: {type: 'number', default: 1},
    output: {type: 'string', default: 'timer'}
  },
  init: function() {
    this.time = 0;
  },
  tick: function(t, dt) {
    if (this.data.tickRate) {
      var secondsPerTick = 1/this.data.tickRate;
      this.time += dt/1000;
      while(this.time > secondsPerTick) {
        this.time -= secondsPerTick;
        this.el.emit(this.data.output, {tick:''});
      }
    }
  }
});
