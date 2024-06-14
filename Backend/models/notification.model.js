import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["follow", "like"], // Ensure "like" is included
  },
  read: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const Notification = mongoose.model("Notification", notificationSchema); // Removed extra space in model name
export default Notification;
