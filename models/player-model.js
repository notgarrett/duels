import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema(
  {
    RobloxId: {
      type: Number,
      required: true,
    },
    Level: {
      type: Object,
    },
    Coins: {
      type: Number,
    },
    Clan: {
      type: Number,
    },
    LastLogin: {
      type: String,
    },
    Kills: {
      type: Number,
    },
    Deaths: {
      type: Number,
    },
    Title: {
      type: Object,
    },
  },
  { collection: "duels" }
);
