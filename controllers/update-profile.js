import mongoose from "mongoose";
import { PlayerSchema } from "../models/player-model";

const User = mongoose.model("Users", PlayerSchema);

export const updateProfile = (req, res) => {
  User.updateOne(req.params, req.body, (err, doc) => {
    if (doc) res.send(doc);
    else res.sendStatus(404);
  });
};
