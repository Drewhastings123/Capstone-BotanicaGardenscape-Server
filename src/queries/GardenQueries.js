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
  try {
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
  } catch (error) {
    return error;
  }
};
const getMyGardenQuery = async ({ user_id }) => {
  try {
    const gardenInfo = await prisma.garden.findMany({
      where: {
        user_id,
      },
    });

    return { gardenInfo };
  } catch (error) {
    return error;
  }
};

const getUserGardenQuery = async ({ user_id, garden_id }) => {
  try {
    const gardenInfo = await prisma.garden.findUnique({
      where: {
        user_id,
        id: garden_id,
      },
    });
    const plantInfo = await prisma.garden_plants.findMany({
      where: {
        garden_id,
      },
    });
    return { gardenInfo, plantInfo };
  } catch (error) {
    return error;
  }
};

const updateGardenQuery = async (garden_id, body) => {
  try {
    // console.log("desc", description);
    // console.log("gardenID", garden_id);
    // console.log("body", body);
    const updateGardenInfo = await prisma.garden.update({
      where: {
        id: garden_id,
      },
      data: {
        description: body.description,
        zone_id: body.zone_id,
        shape_id: body.shape_id,
        water_requirement_id: body.water_requirement_id,
        sun_requirement_id: body.sun_requirement_id,
        soil_requirement_id: body.soil_requirement_id,
      },
    });
    return updateGardenInfo;
  } catch (error) {
    return error;
  }
};

const deleteGardenQuery = async ({ garden_id }) => {
  try {
    const delGarden = await prisma.garden.delete({
      where: {
        id: garden_id,
      },
    });
    return delGarden;
  } catch (error) {
    return error;
  }
};

const addPlantQuery = async (
  { garden_id },
  { plant_location_x, plant_location_y, plant_status_id, plant_id }
) => {
  try {
    // console.log(garden_id);
    // console.log(plant_id);
    const addPlantGarden = await prisma.garden_plants.create({
      data: {
        id: uuid.v4(),
        plant_location_x,
        plant_location_y,
        plant_status_id,
        plant_id,
        garden_id,
      },
    });
    return addPlantGarden;
  } catch (error) {
    return error;
  }
};

const deleteGardenPlantQuery = async ({ garden_plants_id }) => {
  try {
    const delGardenPlant = await prisma.garden_plants.delete({
      where: {
        id: garden_plants_id,
      },
    });
    return delGardenPlant;
  } catch (error) {
    return error;
  }
};

const updateGardenPlantQuery = async (garden_plants_id, body) => {
  try {
    // console.log("desc", description);
    // console.log("gardenID", garden_id);
    // console.log("body", body);
    const updateGardenPlant = await prisma.garden_plants.update({
      where: {
        id: garden_plants_id,
      },
      data: {
        plant_location_x: body.plant_location_x,
        plant_location_y: body.plant_location_y,
        plant_status_id: body.plant_status_id,
        water_requirement_id: body.water_requirement_id,
        plant_id: body.plant_id,
      },
    });
    return updateGardenPlant;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createGardenQuery,
  getUserGardenQuery,
  updateGardenQuery,
  deleteGardenQuery,
  addPlantQuery,
  deleteGardenPlantQuery,
  updateGardenPlantQuery,
  getMyGardenQuery,
};
