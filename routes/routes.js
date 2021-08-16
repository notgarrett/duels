import { createProfile } from "../controllers/create-profile";
import { getAllProfiles } from "../controllers/get-profiles";
import { getProfile } from "../controllers/get-profile";
import { security } from "../controllers/security-check";
import { updateProfile } from "../controllers/update-profile";
import { createClan } from "../controllers/create-clan-id";
import { getAllClans } from "../controllers/get-clans";
import { getClan } from "../controllers/get-one-clan";
import { inviteClan } from "../controllers/add-clan-invite";
import { deleteInvite } from "../controllers/delete-clan-invite";
import { getClanMembers } from "../controllers/get-clan-members";

const routes = (app) => {
  // User Profiles Routing ///////////////////////////////////////////
  /////////////////////////////////////////

  app
    .route("/duels")
    .get(security, getAllProfiles)
    .post(security, createProfile);

  app
    .route("/duels/:RobloxId")
    .get(security, getProfile)
    .put(security, updateProfile);

  app.route("/clans/").get(security, getAllClans).post(security, createClan);

  app
    .route("/clans/:ClanId")
    .get(security, getClan)
    .put(security, inviteClan)
    .delete(security, deleteInvite);

  app.route("/members/:ClanId").get(security, getClanMembers);
};

export default routes;
