/**
 * Host: 165.227.47.243
  Port: 50541
 */

const connect = require('./client');

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    } else {
      console.log("Key", key);
    }
  };
  stdin.on("data", handleUserInput);

  
  return stdin;
};




console.log("Connecting ...");
connect();
setupInput();

