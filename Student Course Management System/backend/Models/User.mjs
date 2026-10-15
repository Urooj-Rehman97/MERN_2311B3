import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  UserName: String, // String is shorthand for {type: String}
  UserEmail: String,
  UserPassword: String,
  
});

export default mongoose.model("User", userSchema)