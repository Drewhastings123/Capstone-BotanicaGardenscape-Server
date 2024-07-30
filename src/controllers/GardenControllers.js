const {
  createGardenQuery,
  getUserGardenQuery,
  updateGardenQuery,
  deleteGardenQuery,
  addPlantQuery,
  deleteGardenPlantQuery,
  updateGardenPlantQuery,
  getMyGardenQuery,
} = require("../queries/GardenQueries");

const createGarden = async (req, res, next) => {
  const returnInfo = await createGardenQuery(req.body);
  res.send(returnInfo);
};

const userGarden = async (req, res) => {
  //   console.log("userGarden", req.params);
  const returnInfo = await getUserGardenQuery(req.params);
  res.send(returnInfo);
};
const myGarden = async (req, res) => {
  const returnInfo = await getMyGardenQuery(req.params);
  res.send(returnInfo);
};

const updateGarden = async (req, res) => {
  //   console.log("update", req.params);
  //   console.log("test", req.body);

  const returnInfo = await updateGardenQuery(req.params.garden_id, req.body);
  //   console.log("returnInfo", returnInfo);
  res.send(returnInfo);
};

const deleteGarden = async (req, res) => {
  const returnInfo = await deleteGardenQuery(req.params);
  res.send(returnInfo);
};

const addPlant = async (req, res) => {
  //   console.log("maybe", req.params);
  //   console.log("test", req.body);
  const returnInfo = await addPlantQuery(req.params, req.body);
  res.send(returnInfo);
};

const deleteGardenPlant = async (req, res) => {
  const returnInfo = await deleteGardenPlantQuery(req.params);
  res.send(returnInfo);
};

const updateGardenPlant = async (req, res) => {
  //   console.log("update", req.params);
  //   console.log("test", req.body);

  const returnInfo = await updateGardenPlantQuery(
    req.params.garden_plants_id,
    req.body
  );
  //   console.log("returnInfo", returnInfo);
  res.send(returnInfo);
};

module.exports = {
  createGarden,
  userGarden,
  updateGarden,
  deleteGarden,
  addPlant,
  deleteGardenPlant,
  updateGardenPlant,
  myGarden,
};
