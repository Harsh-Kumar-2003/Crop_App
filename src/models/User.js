import { Schema, model, models } from "mongoose";
import { v4 as uuidv4 } from "uuid"; // Import the UUID generator

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
  uuid: {
    type: String,
    unique: true,
    default: function () {
      return uuidv4(); // Automatically assign a UUID
    },
  },
});

// Corrected model name by removing the extra space
const User = models?.User || model("User", userSchema);

export default User;
