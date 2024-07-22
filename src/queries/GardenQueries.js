const { prisma, uuid } = require("../shared/shared");

const createGardenQuery = async ({
  description,
  user_id,
  zone_id,
  shape_id,
  water_requirement_id,
  sun_requirement_id,
  soil_requirement_id,
}) => {
  const garden = await prisma.garden.create({
    data: {
      id: uuid.v4(),
      description,
      user_id,
      zone_id,
      shape_id,
      water_requirement_id,
      sun_requirement_id,
      soil_requirement_id,
    },
  });
  return garden;
};

module.exports = { createGardenQuery };
