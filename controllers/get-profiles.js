import { getUsers } from "../functions/get-users";

export const getAllProfiles = async (req, res) => {
  const users = await getUsers({});
  if (users) res.send(users);
  else res.sendStatus(404);
};
