const { prisma, uuid } = require("../shared/shared");

const createPlantQuery = async ({ body }) => {

  console.log(`createPlantQuery: ${body}`);

  try {
    const createPlant = await prisma.plant.create({
      data: {
        id: uuid.v4(),
        plant_name: body.plant_name,
        plant_description: body.plant_description,
        max_height: body.max_height,
        max_width: body.max_width,
        bloom_time: body.bloom_time,
        zone_id: body.zone_id,
        water_requirement_id: body.water_requirement_id,
        sun_requirement_id: body.sun_requirement_id,
        soil_requirement_id: body.soil_requirement_id,
        growth_habit_id: body.growth_habit_id,
        life_cycle_id: body.life_cycle_id,
      },
    });

    console.log(`createdPlant: ${createPlant}`);

    return { createPlant };
  } catch (error) {

    console.log("error: ", error);

    return error;
  }
};

const updatePlantQuery = async (id, body) => {

  console.log(`createPlantQuery: ${body}`);

  try {
    const updatePlant = await prisma.plant.update({
      where: {
        id,
      },
      data: {
        plant_name: body.plant_name,
        plant_description: body.plant_description,
        max_height: body.max_height,
        max_width: body.max_width,
        bloom_time: body.bloom_time,
        zone_id: body.zone_id,
        water_requirement_id: body.water_requirement_id,
        sun_requirement_id: body.sun_requirement_id,
        soil_requirement_id: body.soil_requirement_id,
        growth_habit_id: body.growth_habit_id,
        life_cycle_id: body.life_cycle_id,
      },
    });
    return updatePlant;
  } catch (error) {
    return error;
  }
};

const getAllPlantsQuery = async () => {
  try {
    const plants = await prisma.plant.findMany({
      where: {},
    });

    return { plants };
  } catch (error) {
    return error;
  }
};

const getPlantQuery = async (id) => {
  try {
    const plant = await prisma.plant.findUnique({
      where: { id },
    });

    return { plant };
  } catch (error) {
    return error;
  }
};

const deletePlantQuery = async (id) => {
  try {
    const plant = await prisma.plant.delete({
      where: {
        id,
      },
    });

    if (!plant) {
      return res.status(404).send("Plant not found.");
    }

    return plant;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createPlantQuery,
  updatePlantQuery,
  getAllPlantsQuery,
  getPlantQuery,
  deletePlantQuery,
};
