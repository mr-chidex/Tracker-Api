import { Request, Response, RequestHandler } from "express";

import { Track } from "../models/tracks";

/**
 * @route - GET api/v1/tracks
 * @access - Private
 * @description - get all tracks for a user
 * Note: req: Request | any - was use because we need req.user
 */
export const getTracks = async (req: Request | any, res: Response) => {
  const tracks = await Track.find({ user: req?.user?._id });

  res.json({ status: "sucess", tracks });
};

export const addTrack: RequestHandler = async (req, res) => {};
