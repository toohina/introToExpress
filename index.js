import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';


const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();

app.get('/',(req,res)=>{
   res.sendFile(__dirname+"/public/index.html");
});

app.get('/contact',(req,res)=>{
    res.send("Hi");
});

app.get('/about',(req,res)=>{
    res.sendStatus(200);
});

app.listen(3000,()=>{
    console.log("Listening at port 3000");
})
