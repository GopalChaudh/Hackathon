import mongoose, { Schema, Document } from 'mongoose';




interface PostDocument extends Document {
    author:string; // author PostName
    image:string;
    title:String;
    description:string;
    link:String;
  
}


const PostSchema = new Schema<PostDocument>({
    author:{
        type:String,
    },
    image:{
        type:String
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    link:{
        type:String
    }

 
});

const postModel = mongoose.model<PostDocument>('Post', PostSchema);

export default postModel;
