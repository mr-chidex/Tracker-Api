import Joi from "joi";

import { TrackDoc } from "../libs/types";

export const ValidateTrack = (track: TrackDoc) => {
  const schema = Joi.object({
    name: Joi.string().trim().min(3).required(),
    locations: Joi.array().required(),
  });

  return schema.validate(track);
};
