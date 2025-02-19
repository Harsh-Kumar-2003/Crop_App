import { Schema, model, models } from "mongoose";

const PasswordResetSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    resetToken: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const PasswordReset =
  models?.PasswordReset || model("PasswordReset", PasswordResetSchema);

export default PasswordReset;
