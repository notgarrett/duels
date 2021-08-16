import mongoose from "mongoose";
import { PlayerSchema } from "../models/player-model";

const User = mongoose.model("Users", PlayerSchema);

export const getProfile = (req, res) => {
  User.findOne(req.params, (err, doc) => {
    if (doc) res.send(doc);
    else res.sendStatus(404);
  });
};
