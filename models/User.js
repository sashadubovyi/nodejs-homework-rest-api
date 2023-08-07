import { Schema, model } from "mongoose";
import { handleSaveError, allowUpdateValidate } from "./hooks/index.js";
import { emailRegexp } from "../constants/user-constants.js";

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegexp,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    avatarURL: {
      type: String,
      required: true,
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("findOneAndUpdate", allowUpdateValidate);
userSchema.post("save", handleSaveError);
userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);
export default User;
