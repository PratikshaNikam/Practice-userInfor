import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: String,
  dob:String,
  gender:String,
  email: String,
  phone: String,
  alternateEmail:String,
  emergencyContact:String,
  address: String,
  city:String,
  state:String,
  zip:String,
  country:String,
  jobTitle:String,
  company:String,
  experience: String,
  skills:String,
  bio:String
});

const User = mongoose.model('User', userSchema);
export default User;
