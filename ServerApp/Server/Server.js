const express = require ('express');
const app = express();
const getMethod = require('../Services/getMethod')
const postMethod = require('../Services/postMethod')
const putMethod = require('../Services/putMethod')
const deleteMethod = require('../Services/deleteMethod')

app.get('/',(req, res) => {
    res.send("HOMEPAGE")
})

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

app.put('/',(req,res) => {
    const id = req.query.id;
    const name = req.query.name;
        putMethod(id,name).then(
            () => res.sendStatus(200)
        )
})

app.delete('/',(req,res) => {
    const id = req.query.id;
    deleteMethod(id).then(
        () => {res.sendStatus(200)},
        () => {res.sendStatus(400)}
    )
})


app.listen(1111);
