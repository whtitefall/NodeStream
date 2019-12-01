const express = require('express')
const path = require('path')
var app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

console.log(path.join(__dirname + '/index.html'))
var port = process.env.PORT || 3000;
app.listen(port, ()=>{

    console.log(`server runnning on ${port}`)
})