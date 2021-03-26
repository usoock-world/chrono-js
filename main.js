const express = require('express');
const app = express();
const path = require('path');

const SERVER_CONFIG = require('./server-config.json')
const PORT_NUMBER = SERVER_CONFIG['port-number'];
const mysql = require('mysql');

app.use(express.static(path.join(__dirname, '/static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/main.html'));
})

const connection = mysql.createConnection({
    host: 'cg.crrlhtxhb1el.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '3gca1901217',
    port: 3309,
    // database: 'user'
})

app.post('/query', (req, res) => {
    
    const query = JSON.parse(req.headers.params).query;
    console.log(`Query : ${query}`)
    
    connection.query(query, (err, result, fields) => {
        if (err) {
            console.log('Error >>');
            console.error(err);
            res.status(501).json(err);
        } else {
            console.log('Result >>')
            console.dir(result);
            res.status(200).json(result);
        }
    });
})
// connection.end();

app.listen(PORT_NUMBER, () => {
    console.log(`Express app listen on ${PORT_NUMBER}`)
})