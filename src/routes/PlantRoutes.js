const { routes, app } = require("../shared/shared");

const { findUserByToken } = require("../controllers/UserControllers");

const {
  createPlant,
  updatePlant,
  getAllPlants,
  getPlant,
  deletePlant,
} = require("../controllers/PlantControllers");

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

// TODO  - add the logged in stuff

// create a particular plant based on id - only their top tier of information
routes.post("/plant/", isLoggedInAdmin, createPlant);

// update a particular plant based on id - only their top tier of information
routes.put("/plant/:id", isLoggedInAdmin, updatePlant);

// get all users in the db - only their top tier of information
routes.get("/plants", isLoggedInAdmin, getAllPlants);

// get a particular user in the db - only their top tier of information
routes.get("/plants/:id", isLoggedInAdmin, getPlant);

// delete a particular user and their garden and plants
routes.delete("/plants/delete/:id", isLoggedInAdmin, deletePlant);

module.exports = routes;
