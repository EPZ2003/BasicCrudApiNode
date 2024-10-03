var mysql = require('mysql');
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"basicAPIDB"
})

connection.connect();
connection.query('insert into table1 (id,name) values (2,"enzo")', (err,row,field) => {
    if (err) throw err
})

connection.end()

