'use srtict'
const express=require('express');
const app=express();

const notfoundhandler=require('./handlers/404');
const servererror=require('./handlers/500')
const logger=require('./middleware/logger');
const validator=require('./middleware/validtor');

app.use(logger);

function start(port){
    app.listen(port , ()=>console.log(`Running on PORT ${port}`))
}
app.get('/', (req , res)=>{
    res.send('this is home page , hello im live');
});

app.post('/bad' , (req , res)=>{
    let number=12;
    number.forEach(x=>console.log(x))
    res.send('this is bad roue');
})

app.get('/data' , (req , res)=>{
    res.json({
        id: 1 ,
        name:'Test stu',
        email:"test@test.com"
    })
})

app.get('/person', validator , (req , res)=>{
    const output={
       name:req.query.name
    };
    res.json(output);
})
app.use('*' , notfoundhandler)
app.use(servererror)
module.exports={
    app : app , 
    start :start
}