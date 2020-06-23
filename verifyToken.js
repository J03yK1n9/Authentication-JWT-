const jwt = require("jsonwebtoken");

/* This is a middleware function,
 which we can add to any route we want to be protected/require authentication to access.
  Access will require token, which we assign when a user logs in */
module.exports = function(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied!");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
}
