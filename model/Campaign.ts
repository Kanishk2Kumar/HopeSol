import mongoose, { Schema, Document } from "mongoose";

export interface Campaign extends Document {
  coverImg: string;
  title: string;
  description: string;
  targetAmount: number;
  publicAddress: string;
  currentAmount: number;
  deadline: Date;
  status: "active" | "completed" | "expired" | "pending";
}

const CampaignSchema: Schema<Campaign> = new Schema({
  coverImg: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  targetAmount: {
    type: Number,
    required: true

  },

  publicAddress: {
    type: String,
    required: true
  },
  currentAmount: {
    type: Number,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["active", "completed", "expired", "pending"],
    default: "pending",  // You can set a default status if needed
    required: true
  },

});

const Campaign = mongoose.models.Campaign || mongoose.model<Campaign>("Campaign", CampaignSchema);
export default Campaign;