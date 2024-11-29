// const express=require('express');
import express from 'express';
const app=express()
const port=4000;

app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'joke1',
            content:'first joke'
        },
        {
            id:2,
            title:'joke2',
            content:'two joke'
        },
        {
            id:3,
            title:'joke3',
            content:'third joke'
        },
        {
            id:4,
            title:'joke4',
            content:'fourth joke'
        },
        {
            id:5,
            title:'joke5',
            content:'five joke'
        },
    ]
    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`server start ${port}`);
    
})