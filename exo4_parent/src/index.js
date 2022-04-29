const path = require('path');
const fs = require('fs');

const contenuIndexHtml = fs.readFileSync(path.join(__dirname, '../assets/index.html'), 'utf-8');
const contenuLogTxt = fs.readFileSync(path.join(__dirname, 'log.txt'), 'utf-8');

console.log(contenuIndexHtml);
console.log(contenuLogTxt);
