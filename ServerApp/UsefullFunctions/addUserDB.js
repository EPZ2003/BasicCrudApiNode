let sql = require('mysql2');

const connection = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"basicAPIDB"
})

const addUserDB = (idOfReq ,nameOfReq) => {
    try{
        connection.connect()
        connection.query(`insert into table1 (id,name) values (${idOfReq},'${nameOfReq}')`,(err)=>{
            if (err) throw err;
        })
        connection.end();

    }catch(err){
        console.error("Error when you execute the postMethod")
    }

}

module.exports = addUserDB;