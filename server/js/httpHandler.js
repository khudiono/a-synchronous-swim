const headers = require('./cors');
const dequeue = require('./messageQueue').dequeue;

var directions = ['right', 'left', 'up', 'down'];
module.exports = (req, res) => {
  if (req.method === 'GET') {
    var direction = directions[Math.floor(Math.random() * 4)];
    res.writeHead(200, headers);
    res.end(JSON.stringify(direction));
  }else if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  } else {
    res.writeHead(404, headers);
    res.end();
  }

};
