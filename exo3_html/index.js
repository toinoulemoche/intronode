const fs = require('fs');

// macOS, Linux, and Windows
fs.readFileSync('/assets/index.html');
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

