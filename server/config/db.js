var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'toy'
});



module.exports = db;