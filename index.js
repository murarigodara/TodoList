const express=require('express');
const port=8000;
const app=express();
const routers=require('./routes')



app.use('/',require('./routes'));

app.listen(port,function(){
    console.log("server is running at port : "+port);
})