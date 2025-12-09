const express= require('express');
const app= express();
const port=3001;
app.get('/getdata',(req,res)=>
{
    console.log('yes its working');
});

app.listen(port,()=>
{
console.log('running on 3001 port');
});