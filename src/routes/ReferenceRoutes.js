const { routes, app } = require("../shared/shared");

const { getAllReference } = require("../controllers/ReferenceControllers");
const { findUserByToken } = require("../controllers/UserControllers");

// Move into a shared/housekeeping file - used by all the Route Files
const isLoggedIn = async (req, res, next) => {
  try {
    req.user = await findUserByToken(req.headers.authorization);
    next();
  } catch (error) {
    next(error);
  }
};

// Move into a shared/housekeeping file - used by all the Route Files
const isLoggedInAdmin = async (req, res, next) => {
  //TODO - is the user logged in, if yes are they admin
  // - should use the isLoggedIn function rather than duplicate it
  try {
    req.user = await findUserByToken(req.headers.authorization);
    next();
  } catch (error) {
    next(error);
  }
};

// get all the reference data
routes.get("/reference/", getAllReference);

module.exports = routes;
