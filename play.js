/**
 * Host: 165.227.47.243
  Port: 50541
 */

const {connect} = require('./client');
const {setupInput} = require('./input');

console.log("Connecting ...");
let conn = connect();
setupInput(conn);

