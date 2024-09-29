const express = require ('express');
const app = express();
const getMethod = require('../Services/getMethod')
const postMethod = require('../Services/postMethod')
const putMethod = require('../Services/putMethod')
const deleteMethod = require('../Services/deleteMethod')
//Todo maybe do sth with the loading data

app.get('/',(req, res) => {
    res.send("HOMEPAGE")
})
//TODO: have to do a real get
app.get('/get',(req,res) => {
    getMethod().then(
        () => res.sendStatus(200),
        () => res.sendStatus(520)
    )
})

app.post('/post',(req,res) => {
    const id = req.query.id;
    const name = req.query.name
    postMethod(id,name).then(
        () => res.sendStatus(200),
        () => res.sendStatus(520)
    )
})

//TODO: Have to use checkIdInJson
app.put('/',(req,res) => {
    const id = req.query.id;
    const name = req.query.name;
        putMethod(id,name).then(
            () => res.sendStatus(200)
        )
})

//TODO : Have to do it and think about checkIdInJson
app.delete('/',(req,res) => {
    const id = req.query.id;
    deleteMethod(id).then(
        () => {res.sendStatus(200)},
        () => {res.sendStatus(400)}
    )
})


app.listen(1111);
