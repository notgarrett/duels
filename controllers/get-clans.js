import mongoose from "mongoose";
import { getClans } from "../functions/get-clans";

export const getAllClans = (req, res) => {
  const clans = getClans(req.body);
  if (clans) res.send(clans);
  else res.sendStatus(404);
};
