import mongoose from 'mongoose';
const postSchema=mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedfile:String,
    likeCount:{
        type:Number,
        defaule:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
});
const PostMessage=mongoose.model('PostMessage',postSchema);
export default PostMessage;
