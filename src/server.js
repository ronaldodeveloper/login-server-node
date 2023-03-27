const express= require('express');
const cors= require('cors');
const app= express();
const port= process.env.PORT || 8080;
const routers = require('../src/router.js');


app.use(express.json())
app.use(cors())

app.use(routers)

app.listen(port, (err)=>{
    if(!err){
        console.log('server on')
    }else{
        console.log('server error' + err)
    }
})