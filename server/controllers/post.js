import PostMessage from '../models/postMessage.js'
export const getpost=(req,res)=>{
    try {
        const postMessage= PostMessage.find();
        res.status(200).json(postMessage);
    } catch (error) {
        console.log("getpost");
        res.status(404).json({message:error.message});
    }
    }
export const createPost=(req,res)=>{
    const post=res.body;
    const newPost=new PostMessage(post);
   try {
     newPost.save();
      res.status(201).json(newPost);
   } catch (error) {
    console.log("createpost");
    res.status(409).json({message:error.message});
   }
    }