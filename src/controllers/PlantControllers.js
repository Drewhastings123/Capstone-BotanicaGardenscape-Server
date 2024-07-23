const { findUserByTokenQuery } = require("../queries/UserQueries");

const {
  createPlantQuery,
  updatePlantQuery,
  getAllPlantsQuery,
  getPlantQuery,
  deletePlantQuery,
} = require("../queries/PlantQueries");

const createPlant = async (req, res, next) => {
  console.log(`createPlant: ${req}`);

  const returnInfo = await createPlantQuery(req);
  res.send(returnInfo);
};

const updatePlant = async (req, res, next) => {

  console.log(`updatePlant: ${req.params.id}`);

  console.log(`updatePlant: ${req}`);

  const returnInfo = await updatePlantQuery(req.params.id, req.body);
  res.send(returnInfo);
};

const getAllPlants = async (req, res, next) => {
  const returnPlants = await getAllPlantsQuery();
  res.send(returnPlants);
};

const getPlant = async (req, res, next) => {
  const returnPlant = await getPlantQuery(req.params.id);
  res.send(returnPlant);
};

const deletePlant = async (req, res, next) => {
  const returnInfo = await deletePlantQuery(req.params.id);
  res.send(returnInfo);
};

module.exports = {
  createPlant,
  updatePlant,
  getAllPlants,
  getPlant,
  deletePlant,
};
