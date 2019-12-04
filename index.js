const express = require('express');
var fs = require('fs');
bodyParser = require('body-parser') ;


const app = express();
const port = 3000;
const pagesize = 40;

let arrayphoto = [];


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9951061722",
  database : "movies"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



app.use(bodyParser.json());
app.use(express.json());

app.get('/photos',(req,res)=>{
  con.query('SELECT * FROM movieslist',(err , rows, fields)=>{

    console.log(rows);
    res.send(rows)

  })

});

app.post( "/photos" , ( req , res ) =>{

    let moviePhoto = req.body.photourl;
    let movieName = req.body.name;
    let movieDesc = req.body.desc;

    const sql = "INSERT INTO movieslist  ( `photourl`, `moviename`, `desc`) VALUES ( '" +moviePhoto +" ', '" + movieName+" ', '" + movieDesc + "' ) ;" ;
    con.query(sql, function(err,result){
        console.log(err);
        console.log(result);
        res.send(result)
    });
} )







// app.get("/photos/:page/", (req, res) => {
//     fs.readFile('photos.txt','utf-8' ,(err, data) => {
//         if (err) throw err;
//        es = data.split('\n');

//       res.header("Access-Control-Allow-Origin", "*");
//       res.header("Access-Control-Allow-Headers", "*");
//     const page = req.url.split("/")[2];
//     start = (page - 1) * pagesize;
//     end = start + pagesize;
//     res.send(es.slice());
        
//     });

    
    
// });





app.listen(3000);