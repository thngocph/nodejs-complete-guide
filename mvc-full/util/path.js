const path = require('path');

// This gives us the path to the file that is responsible for running our application (app.js)
module.exports = path.dirname(require.main.filename);