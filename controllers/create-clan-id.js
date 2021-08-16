import mongoose from "mongoose";
import { ClanSchema } from "../models/clan-model";
import { getClans } from "../functions/get-clans";

const Clan = mongoose.model("Clans", ClanSchema);

export const createClan = async (req, res) => {
  if (await getClans({ ClanId: req.body.ClanId })) {
    res.sendStatus(403);
    return;
  }

  let clan = new Clan({
    ClanId: req.body.ClanId,
    Tag: req.body.Tag,
    Invites: [],
  });

  clan.save((err, profile) => {
    res.send(profile);
  });
};
