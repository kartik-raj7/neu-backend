import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{type: String , required:true , trim:true},
    data:{type: String , required:true , trim:true},    
})
const UserModel = mongoose.model("neurondata",userSchema);

export default UserModel