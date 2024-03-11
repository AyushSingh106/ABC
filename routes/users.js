const mongoose=require('mongoose');
const plm=require('passport-local-mongoose');
// const { stringify } = require('querystring');
// mongoose.connect("mongodb+srv://1ms21ci009:Ayush_lkw@cluster0.mwb5twd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
require('dotenv').config();
  mongoose.connect(process.env.MONGO_URL);
const userSchema=mongoose.Schema({
  username:String,
  naam:String,
  password:String,
  profileImage:String,
  boards:{
    type:Array,
    default:[]
  },
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: "post"
        }]
});
userSchema.plugin(plm);
module.exports=mongoose.model("user",userSchema);