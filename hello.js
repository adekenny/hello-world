let express = require('express');
let app = express();
let port = 8500;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})
require('dotenv').config();
/*
app.get('/', function(req, res){

    res.send("Hello Express");
});
*/

/*
app.get('/json', function(req, res){

    const textCase = process.env.MESSAGE_STYLE;

   if(textCase === "uppercase"){
       res.json({"message": "hello json".toUpperCase()})
   }
   else
   {
       res.json({"message": "Hello json"})
   }
  })
  */
/*
  app.use('/user', function(req, res, next){
    console.log(req.method + " " + req.path + " " + req.ip);
      next();
  })

  */
/*
  app.get('/now', function(req, res, next){

    req.time = new Date().toString();
    next();
  }, function(req, res){
      res.json({
          "time": req.time
      })
  })
  */
/*
  app.get('/:word/echo', function(req, res){
      res.json({echo: req.params.word});
  })
*/

app.get('/name', function(req, res){
    res.json({
        "name": req.query.first + " " + req.query.last 
    })
})


  





