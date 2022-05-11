const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: `165.227.47.243`,
    port: 50541,
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    console.log("Still connected!");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;