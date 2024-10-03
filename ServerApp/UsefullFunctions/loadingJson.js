const fsPromises = require('node:fs/promises');
const loadingJson = async (filePath) =>{
    const file = await fsPromises.readFile(filePath,{encoding:"utf-8"})
    const fileObj = JSON.parse(file);

    return new Promise((resolve, reject) => {
          if (fileObj){
             resolve(fileObj)
         }else{
             reject()
         }
    }).then(
        (stocked) => {
             this.set(stocked)
        },
        () => console.error("ededz")
    )


}
const filepath = '../DB/databaseAdvanced.json';

const testing = async () => {
    return await loadingJson(filepath)
}
console.log(testing())
