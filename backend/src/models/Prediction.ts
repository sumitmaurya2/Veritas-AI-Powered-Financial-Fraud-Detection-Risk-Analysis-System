import mongoose, { Schema, Document } from "mongoose";

export interface IPrediction extends Document {
  amount: number;
  hour: number;
  location: string;
  device: string;
  merchant: string;
  prediction: string;
  riskScore: number;
  confidence: number;
  createdAt: Date;
}

const PredictionSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },

    hour: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    device: {
      type: String,
      required: true,
    },

    merchant: {
      type: String,
      required: true,
    },

    prediction: {
      type: String,
      required: true,
    },

    riskScore: {
      type: Number,
      required: true,
    },

    confidence: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IPrediction>(
  "Prediction",
  PredictionSchema
);