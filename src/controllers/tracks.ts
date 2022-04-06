import { Request, Response } from "express";
import { TrackDoc } from "../libs/types";

import { Track } from "../models/tracks";
import { ValidateTrack } from "../validators/tracks";

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

/**
 * @route - POST api/v1/tracks
 * @access - Private
 * @description - add track for a user
 * Note: req: Request | any - was use because we need req.user
 * @required - name, location
 */
export const addTrack = async (req: Request | any, res: Response) => {
  const { error, value } = ValidateTrack(req.body);

  //check for errors
  if (error)
    return res.status(422).json({
      status: "error",
      message: error.details[0].message,
    });

  const { name, locations }: TrackDoc = value;

  const track = new Track({ name, locations, user: req.user?._id });

  await track.save();

  res.status(201).json({
    status: "success",
    message: "track added successfully",
    track,
  });
};
