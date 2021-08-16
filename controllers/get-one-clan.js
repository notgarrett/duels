import mongoose from "mongoose";
import { ClanSchema } from "../models/clan-model";

const Clan = mongoose.model("Clans", ClanSchema);

export const getClan = (req, res) => {
  Clan.findOne(req.params, (err, doc) => {
    console.log("hmmm");
    console.log(req.params);
    console.log(doc);
    if (doc) res.send(doc);
    else res.sendStatus(404);
  });
};
