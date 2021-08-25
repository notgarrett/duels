import { failure, success } from "../embeds/embed-functions";
import { getRobloxId } from "../functions/get-roblox-id";
import { getUser } from "../functions/get-user";
import { deleteUser } from "../functions/delete_user";

module.exports = {
  name: "wipe",
  description: "wipes user data",
  async execute(msg, args) {
    if (!args[1]) {
      failure(
        msg.channel,
        "Invaliud arguments.",
        "Please ill out command as: ```_wipe RobloxUser```"
      );
      return;
    }

    const robloxUserId = await getRobloxId(args[1]);

    if (!robloxUserId) {
      failure(
        msg.channel,
        "Invalid Roblox User!",
        "The Roblox User ```" + args[1] + "``` does not exist."
      );
      return;
    }

    const profile = await getUser({ RobloxId: robloxUserId });

    if (!profile) {
      failure(
        msg.channel,
        "Invalid User.",
        "The user ```" + args[1] + "``` does not exist in the database."
      );
      return;
    }

    await deleteUser({ RobloxId: robloxUserId });
    success(
      msg.channel,
      "User deleted.",
      "User ```" + args[1] + "``` has been deleted."
    );
  },
};
