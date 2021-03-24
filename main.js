const express = require('express');
const app = express();
const path = require('path');

const SERVER_CONFIG = require('./server-config.json')
const PORT_NUMBER = SERVER_CONFIG['port-number'];
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'cg.crrlhtxhb1el.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '3gca1901217',
    port: 3309,
})

app.get('/', (req, res) => {
    connection.connect((err) => {
        if (err) console.error(err);
        else console.log('act!')
    });

    connection.end();
})

app.listen(PORT_NUMBER, () => {
    console.log(`Express app listen on ${PORT_NUMBER}`)
})