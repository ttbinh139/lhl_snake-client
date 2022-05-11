/**
 * Host: 165.227.47.243
  Port: 50541
 */

const net = require('net');

/* const config = {
  host : `165.227.47.243`,
  port : 50541
}; */

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: `165.227.47.243`,
    port: 50541,
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    console.log("Still connected");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

