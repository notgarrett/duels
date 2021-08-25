import mongoose from "mongoose";
import { PlayerSchema } from "../models/player-model";

const User = mongoose.model("Users", PlayerSchema);

export const deleteUser = async (query) => {
  console.log(query);
  return new Promise((resolve, reject) => {
    let search = query;
    if (!search) resolve(false);
    User.deleteOne(search, (err, doc) => {
      if (err) throw err;
      console.log(doc);
      if (doc.length) resolve(doc);
      else resolve(false);
    });
  });
};
