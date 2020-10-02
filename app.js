const express = require('express')
const app = express()
const port = 15000
var mysql = require('mysql');
app.get('/test', (req, res) => {
  var connection = mysql.createConnection({
    host     : 'localhost:3306',
    user     : 'db_test',
    password : '*S4d30vs',
    database : 'admin_test'
  });
   
  connection.connect();
   
  connection.query("SELECT * FROM 'test'", function (error, results, fields) {
    if (error) throw error;
    res.send('The solution is: ', results[0].solution);
  });
   
  connection.end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

