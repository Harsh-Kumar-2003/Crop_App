// lib/models/User.js
import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

// Corrected model name by removing the extra space
const User = models?.User || model("User", userSchema);

export default User;
