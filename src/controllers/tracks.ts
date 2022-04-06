import { Request, Response } from "express";

import { Track } from "../models/tracks";

/**
 * @route - POST api/v1/tracks
 * @access - Private
 * @description - get all tracks for a user
 */
export const getTracks = async (req: Request | any, res: Response) => {
  const tracks = await Track.find({ user: req?.user?._id });

  res.json({ status: "sucess", tracks });
};
