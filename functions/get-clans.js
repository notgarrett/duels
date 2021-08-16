import mongoose from "mongoose";
import { ClanSchema } from "../models/clan-model";

const Clan = mongoose.model("Clans", ClanSchema);

export const getClans = async (query) => {
  return new Promise((resolve, reject) => {
    let search = query || {};
    Clan.find(search, (err, doc) => {
      if (err) throw err;
      if (doc.length) resolve(doc);
      else resolve(false);
    });
  });
};
