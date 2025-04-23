import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: String,
  dob: String,
  gender: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  occupation: String,
  experience: String
});

const User = mongoose.model('User', userSchema);
export default User;
