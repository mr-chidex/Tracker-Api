import { Request, Response } from "express";

import { Track } from "../models/tracks";

export const getTracks = async (req: Request | any, res: Response) => {
  const tracks = await Track.find({ user: req?.user?._id });

  res.json({ status: "sucess", tracks });
};
