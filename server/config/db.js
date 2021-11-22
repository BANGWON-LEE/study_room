var mysql = require('mysql');
const db = mysql.createPool({
    host : 'us-cdbr-east-04.cleardb.com',
    user : 'ba92112f17ff1d',
    password : 'b0edeba0',
    database : 'heroku_7a8ef1fa16a5340'
});



module.exports = db;