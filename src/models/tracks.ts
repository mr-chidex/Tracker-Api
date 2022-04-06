import mongoose, { Schema } from "mongoose";
import { TrackDocument, PointDcument } from "../libs/types";

const pointSchema = new Schema<PointDcument>({
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

const trackSchema = new Schema<TrackDocument>(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    locations: [pointSchema],
  },
  { timestamps: true }
);

export const Track = mongoose.model<TrackDocument>("Track", trackSchema);
