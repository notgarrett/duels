import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ClanSchema = new Schema(
  {
    ClanId: {
      type: Number,
      required: true,
    },
    Tag: {
      type: String,
    },
    Invites: {
      type: Array,
    },
  },
  { collection: "clans" }
);
