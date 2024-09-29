const fsPromise = require('node:fs/promises')
const checkIdInJson = require ('../UsefullFunctions/checkIdInJson')


const putMethod = async (id,item) => {
    checkIdInJson(id)
        .then(
        //resolve --> did the conversion
        async () => {
                const filePath = '../DB/database.json';
                const file = await fsPromise.readFile(filePath, {encoding: 'utf-8'});
                const fileObj = JSON.parse(file);

                fileObj[id] = item;

                const fileUpdated = JSON.stringify(fileObj);
                await fsPromise.writeFile(filePath, fileUpdated);
                console.log(`User ${id}'s is updated by the value ${item}`)
        }
    )//because We throw an error then we have to us .catch after NOT before the then
        .catch((err)=> {
                console.error("The problem is in the following sentence " + err)
            }
        )


}

module.exports = putMethod