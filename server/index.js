'use strict';
import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes/posts.js';
const app=express();

app.use(bodyparser.json({limit:"30mb",exdended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const PORT=process.env.PORT || 4400;

app.use('/posts',router);
const CONNECTION_URL='mongodb+srv://asbhavsar:9feHdSOjbH1sOoT7@cluster0.fylhn.mongodb.net/asb?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`server running on port ${PORT}`)))
.catch((error)=>console.log(error.message));
mongoose.set('useFindAndModify',false);


