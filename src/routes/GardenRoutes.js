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
//Get all data from Garden, the garden information as well as the list of plants
// routes.get("/garden/:user_id/test/:garden_id", isLoggedIn, userGarden);
// routes.put("/garden/:garden_id", isLoggedIn, updateGarden);
// routes.delete("/garden/:garden_id", isLoggedIn, deleteGarden);
//modify the list of garden_plants with the three below, one plant at a time
// routes.post("/garden/plants/:garden_plants_id", isLoggedIn, addPlant);
// routes.delete("/garden/plants/:garden_plants_id", isLoggedIn, deletePlant);
// routes.put("/garden/plants/:garden_plants_id", isLoggedIn, updatePlant);

module.exports = routes;
