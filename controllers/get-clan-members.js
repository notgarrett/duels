import { getUsers } from "../functions/get-users";
export const getClanMembers = (req, res) => {
  const members = getUsers(req.params);
  if (members) res.send(members);
  else res.sendStatus(404);
};
