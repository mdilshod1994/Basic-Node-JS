const path = require('path')

console.log(path.join(__dirname, 'test', '/second.html'));

console.log(path.resolve(__dirname, 'test', '/second.html'));