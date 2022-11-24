const mysql = require('mysql2/promise');
const { host, user, password, database } = require('./constants');

const dbConnection = async () => {
    const connection = await mysql.createConnection({
        host     : 'localhost',
        user     : 'manju',
        password : '1234',
        database : 'dbms'
    });

    return connection;
}

module.exports = { dbConnection };