const { routes } = require("../shared/shared");

const { findUserByToken } = require("../controllers/UserControllers");

const { createGarden } = require("../controllers/GardenControllers");

const isLoggedIn = async (req, res, next) => {
  try {
    req.user = await findUserByToken(req.headers.authorization);
    next();
  } catch (error) {
    next(error);
  }
};

routes.post("/garden", isLoggedIn, createGarden);

module.exports = routes;
