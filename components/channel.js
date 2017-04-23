AFRAME.registerComponent('channel', {
  multiple: true,
  schema: {
    channel: {type: 'string'},
    input: {type: 'string'},
    output: {type: 'string'},
  },
  init: function() {
    this.inputFunction = this.input.bind(this);
    this.outputFunction = this.output.bind(this);
    if (this.data.input != '') {
      this.el.addEventListener(this.data.input, this.inputFunction);
    }
    if (this.data.output != '') {
      this.system.addOutputListener(this.outputFunction);
    }
  },
  input: function(e) {
    this.system.emit(e.detail, this.data.channel);
  },
  output: function(detail, channel) {
    if (this.data.channel == channel) {
      this.el.emit(this.data.channel, detail);
    }
  }
});

AFRAME.registerSystem('channel', {
  init: function() {
    this.outputListeners = [];
  },
  addOutputListener: function(listener) {
    this.outputListeners.push(listener);
  },
  emit: function(detail, channel) {
    for (var i = 0; i < this.outputListeners.length; i++) {
      this.outputListeners[i](detail, channel);
    }
  }
});
