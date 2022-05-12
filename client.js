const net = require('net');
const {IP, PORT} = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    conn.write("Name: ___");
  });

  conn.on("connect", () => {
    
     /*  for( i = 1; i < 20; i++) {
        setTimeout(function(){
          conn.write("Move: up");
        }, i*500);

        setTimeout(function(){
          conn.write("Move: left");
        }, (i + 6)*500);

        setTimeout(function(){
          conn.write("Move: down");
        }, (i + 12)*500);

        setTimeout(function(){
          conn.write("Move: right");
        }, (i + 18)*500);
      } */
    
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};