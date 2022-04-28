require('dotenv').config();
import { readFileSync } from 'fs';

// macOS, Linux, and Windows
readFileSync('/assets/index.html');
// => [Error: EISDIR: illegal operation on a directory, read <directory>]
