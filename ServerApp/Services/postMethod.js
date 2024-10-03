const fsPromise = require('node:fs/promises')
const addUserDb = require('../UsefullFunctions/addUserDB')

const postMethod = async (id,name) => {

    const filePath = '../DB/database.json'
    let file = await fsPromise.readFile(filePath,{encoding:'utf-8'})
    const fileObj = JSON.parse(file);

    return new Promise( (resolve, reject) => {

        if (typeof parseInt(id) == "number") {

            fileObj[id] = name;
            file = JSON.stringify(fileObj);
            resolve();
        }else{
            reject();
        }
    }).then(
            () => {fsPromise.writeFile(filePath,file);addUserDb(id,name);console.log("Item saved")},
            () => {console.error("We can't save the element because of the id or the name that are not in the conform format");}
        )
}

module.exports = postMethod;
