const fs = require('fs');

// macOS, Linux, and Windows
const content = fs.readFileSync('assets/index.html', 'utf-8');
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

console.log(content);
