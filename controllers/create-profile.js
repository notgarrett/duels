import mongoose from "mongoose";
import { PlayerSchema } from "../models/player-model";
import { getUsers } from "../functions/get-users";

const User = mongoose.model("Users", PlayerSchema);

export const createProfile = async (req, res) => {
  if (await getUsers({ RobloxId: req.body.RobloxId })) {
    res.sendStatus(403);
    return;
  }
  console.log("deez");

  let loginTime = req.body.LastLogin || "Undefined";

  let player = new User({
    RobloxId: req.body.RobloxId,
    Level: { CurrentXP: 0, Level: 1, Prestige: 0 },
    Coins: 0,
    Clan: 1,
    LastLogin: loginTime,
    Kills: 0,
    Deaths: 0,
  });

  player.save((err, profile) => {
    res.send(profile);
  });
};
