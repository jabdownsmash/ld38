AFRAME.registerComponent('timer', {
  schema: {
    tickRate: {type: 'number', default: 1},
    output: {type: 'string', default: 'timer'}
  },
  init: function() {
    this.secondsPerTick = 1/this.data.tickRate;
    this.time = 0;
  },
  tick: function(t, dt) {
    this.time += dt/1000;
    while(this.time > this.secondsPerTick) {
      this.time -= this.secondsPerTick;
      this.el.emit(this.data.output, {tick:''});
    }
  }
});
