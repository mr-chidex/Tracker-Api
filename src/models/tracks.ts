import mongoose, { Schema } from "mongoose";

const pointSchema = new Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const trackSchema = new Schema(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    locations: [pointSchema],
  },
  { timestamps: true }
);

export const Track = mongoose.model("Track", trackSchema);
