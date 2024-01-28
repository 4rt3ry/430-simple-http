const text = require('./textResponses.js');

const getHelloJson = (request, response) => {
  const helloJson = { message: text.hello };
  const message = JSON.stringify(helloJson);
  response.writeHead(200, { 'Content-Type': 'text/json' });
  response.write(message);
  response.end();
};

const getTimeJson = (request, response) => {
  const timeJson = { time: text.getTimeString() };
  const message = JSON.stringify(timeJson);
  response.writeHead(200, { 'Content-Type': 'text/json' });
  response.write(message);
  response.end();
};

module.exports = {
  getHelloJson,
  getTimeJson,
};
