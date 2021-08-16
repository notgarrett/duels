import mongoose from "mongoose";
import { ClanSchema } from "../models/clan-model";

const Clan = mongoose.model("Duels", ClanSchema);

export const inviteClan = (req, res) => {
  Clan.updateOne(
    req.params,
    { $push: { Invites: req.body.Invites } },
    (err, doc) => {
      if (doc) res.send(doc);
      else res.sendStatus(404);
    }
  );
};
