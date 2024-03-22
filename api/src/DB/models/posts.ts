import mongoose, { Schema, Document } from 'mongoose';




interface UserDocument extends Document {
    author:string; // author userName
    image:string;
    title:String;
    description:string;
    link:String;
  
}


const userSchema = new Schema<UserDocument>({
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

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
