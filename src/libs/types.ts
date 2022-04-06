import { Document } from "mongoose";
export interface UserDoc {
  name?: string;
  email: string;
  password: string;
}
export interface Payload {
  name?: string;
  email: string;
  password: string;
  _id: string;
}

export interface PointDoc {
  timestamp: number;
  coords: { [key: string]: number };
}

export interface TrackDoc {
  name: string;
  user?: string;
  locations: [PointDoc];
}

export type UserDocument = Document & UserDoc;
export type TrackDocument = Document & TrackDoc;
export type PointDcument = Document & PointDoc;
