var webconfig = require('./webconfig');
var events = require('events');

class App extends events.EventEmitter {
  constructor() {
    super();
    this.on('launch_webconfig', function () {
      webconfig({
        port: 3009,
      });
    });
    this.on('error', function (err) {
      console.log('Error:', err);
    });
  }
}

const app = new App();

app.emit('launch_webconfig');
