const express = require('express');
const app = express();
const path = require('path');
const SERVER_CONFIG = require('./server-config.json')

app.use(express.static(path.join(__dirname + '/static')));

app.post((req, res) => {
    console.dir(req);
})

app.listen(() => {
    console.log(`Express app listen on ${SERVER_CONFIG['port-number']}`)
})
