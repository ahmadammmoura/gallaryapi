const express = require('express');
var fs = require('fs');

const app = express();
const port = 3000;
const pagesize = 20;

let arrayphoto = [];

app.get("/photos/:page/", (req, res) => {
    fs.readFile('photos.txt','utf-8' ,(err, data) => {
        if (err) throw err;
        es = data.split('\n');
        
    });

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    const page = req.url.split("/")[2];
    start = (page - 1) * pagesize;
    end = start + pagesize;
    res.send(es.slice(start, end));
    
});


app.listen(3000);