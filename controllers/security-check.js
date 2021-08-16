const code = "XrR3BN6dhmXBHt5de8YB";

export const security = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[0];
  if (!token) return res.sendStatus(401);
  if (token === code) {
    next();
    return;
  }
  res.sendStatus(401);
};
