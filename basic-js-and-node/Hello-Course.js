console.log("Hello Nodejs");

const fs = require('fs'); // == import { writeFileSync } from 'fs';

fs.writeFileSync('hello.txt', "Hello Nodejs");