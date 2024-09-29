const fsPromise = require('node:fs/promises');
/*Check if the id is in the database file
 *resolve --> Id in the database
 * reject --> Id is NOT in the database
 */
const checkIdInJson = async (idNonFormated) => {
    const id = idNonFormated.toString();
    const filePath = '../DB/database.json';
    const file = await fsPromise.readFile(filePath,{encoding: 'utf-8'});
    const fileObj = JSON.parse(file);
    const listKey = Object.keys(fileObj);

    return new Promise( (resolve, reject) => {

        //check if we put other thing than a number then it will send an error
        if ( isNaN ( parseInt(id) ) ){
            throw new Error("Other value than a number")
            reject();
        }
        //if-else check if the id includes into the keys list of the Database file
        if (listKey.includes(id)) {
            resolve();
        } else {
            throw new Error("Unsaved id")
            reject();
        }
    })


}
module.exports = checkIdInJson