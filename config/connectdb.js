import mongoose from "mongoose";

const connectDb = async (DATABSE_URL)=>{
    try{
      const DB_OPTIONS = {
         dbName: "neuron"
      }
      await mongoose.connect(DATABSE_URL,DB_OPTIONS);
      console.log('db connected')
      
    } catch(error){
      
    }
};
export {connectDb}