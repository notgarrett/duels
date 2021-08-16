import mongoose from "mongoose";
import { ClanSchema } from "../models/clan-model";

const Clan = mongoose.model("Duels", ClanSchema);

export const deleteInvite = (req, res) => {
  Clan.updateOne(
    req.params,
    { $pullAll: { Invites: req.body.Invites } },
    (err, doc) => {
      if (doc) res.send(doc);
      else res.sendStatus(404);
    }
  );
};
