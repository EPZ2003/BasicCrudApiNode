const fsPromise = require ('node:fs/promises');

const getMethod = async () => {
    const path = '../DB/database.json';
    const file = await fsPromise.readFile(path,{encoding: 'utf-8'})

    return new Promise((resolve, reject) => {
        if (file.length > 0 ){
            console.log(file)
            resolve();
        }else {
            reject()
        }
    })
}
getMethod()
module.exports = getMethod;