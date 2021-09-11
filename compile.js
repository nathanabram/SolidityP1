const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol'); // locates the file, independant of system used
const source = fs.readFileSync(inboxPath, 'utf8'); // reads and returns file content



console.log(solc.compile(source, 1).contracts[':Inbox']);

//module.exports = solc.compile(source, 1).contracts[':Inbox'];
