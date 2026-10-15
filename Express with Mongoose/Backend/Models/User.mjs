import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  Name: String, // String is shorthand for {type: String}
//   Name: {
//     type: String,
//     required: true
//   },
  Email: String,
  Password: String,
  
});

export default mongoose.model("User", UserSchema)