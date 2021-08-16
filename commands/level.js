import { failure, notification } from "../embeds/embed-functions";
import { getRobloxName } from "../functions/get-roblox-name";
import { getRobloxId } from "../functions/get-roblox-id";
import { getUsers } from "../functions/get-users";

module.exports = {
  name: "level",
  description: "gets the level dip",
  async execute(msg, args) {
    if (!args[1]) {
      failure(
        msg.channel,
        "Invalid arguements!",
        "Please fill out the command as: ```_level robloxusername```"
      );
      return;
    }

    let robloxUserId = await getRobloxId(args[1]);

    if (!robloxUserId) {
      failure(msg.channel, "Failure", "User does not exist.");
      return;
    }

    let user = await getUsers({ RobloxId: robloxUserId });
    console.log(user);
    console.log(user[0]);

    if (!user) {
      failure(msg.channel, "Failure", "User is not in the database.");
      return;
    }

    if (!user[0].Level) {
      failure(msg.channel, "Failure", "User does not have a level..");
      return;
    }

    let robloxUserName = await getRobloxName(robloxUserId);

    notification(
      msg.channel,
      "Level",
      `${robloxUserName}'s level is ${user[0].Level.Level}`
    );
  },
};
