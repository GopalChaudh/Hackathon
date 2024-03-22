import mongoose, { Schema, Document } from 'mongoose';

// Define the Social schema
interface Social {
  svg: string;
  name: string;
  link: string;
}
interface Posts{
    image:string;
    title:String;
    description:string;

}
interface followersAndFolowing{
    image:string;
    userName:string;
}



// Define the User schema
interface UserDocument extends Document {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  bio:string;
  totalfollowing?:number;
  totalfollowers?: number;
  profileImage?: string;
  social?: Social[];
  dateJoined: Date;
  posts: string[];
  organizations: string;
  followersList: followersAndFolowing[],
  followingList: followersAndFolowing[],
  volunteerRating: number,
}


const userSchema = new Schema<UserDocument>({
  fullName: { type: String, required: true },
  userName: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  bio:{type:String,require:false},
  totalfollowing: { type: Number ,default:0},
  totalfollowers: { type: Number,default:0 },
  profileImage: { type: String },
  social: [{
    svg: { type: String },
    name: { type: String },
    link: { type: String },
  }],
  dateJoined: { type: Date, default: Date.now },
  posts:[{type:String}],
  organizations: [{ type: String }],
  followersList:[{

    image:{type:String},
    userName:{type:String}
}
  ],
  followingList: [
    {

        image:{type:String},
        userName:{type:String}
    }
  ],
  volunteerRating: {type:Number},
});

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
