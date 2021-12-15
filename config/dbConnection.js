const Pool = require('pg').Pool;
const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'google',
    password: "root",

});

connection.connect(function (err, client) {
    if (err) {
        console.log(err.message);
    } else {
        console.log("connected to database")
    }
})


module.exports = connection;