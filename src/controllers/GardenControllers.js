const { createGardenQuery } = require("../queries/GardenQueries");

const createGarden = async (req, res, next) => {
  const returnInfo = await createGardenQuery(req.body);
  res.send(returnInfo);
};

module.exports = { createGarden };
