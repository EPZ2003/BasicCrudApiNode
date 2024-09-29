const fsPromise = require('node:fs/promises')
const checkIdInJson = require('../UsefullFunctions/checkIdInJson')

const deleteMethod = async (id) => {

    checkIdInJson(id).then(
        async () => {
            const filePath = '../DB/database.json';
            const file = await fsPromise.readFile(filePath,{encoding:'utf-8'});
            const fileObj = JSON.parse(file);

            //Delete the item
            console.log(id)
            delete fileObj[id];
            //Converted into String
            const fileUpdated = JSON.stringify(fileObj);
            await fsPromise.writeFile(filePath,fileUpdated);
            console.log(`item ${id} deleted`)
        }
    ).catch(
        (err) => {
            console.error("The problem is in the following sentence " + err)
        }
    )
}
module.exports = deleteMethod