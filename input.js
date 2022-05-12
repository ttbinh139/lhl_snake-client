const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, SPEC_KEY} = require('./constants');
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === MOVE_UP_KEY) {
    //console.log(connection);
    connection.write("Move: up");
    //console.log("Move Up", key);
  } else if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
    //console.log("Move left", key);
  } else if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
    //console.log("Move down", key);
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
    //console.log("Move right", key);
  } else if(key === SPEC_KEY){ // special key
    console.log("Send message with key: ", key);
    connection.write("Say: HMN");
  } else {
    console.log("Normal keywords");
  }
};

module.exports = { setupInput };