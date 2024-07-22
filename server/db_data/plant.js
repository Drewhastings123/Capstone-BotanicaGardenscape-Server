const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

// TODO uses a query, should use a route

const seed_plant = async ({
  plant_name,
  plant_description,
  max_height,
  max_width,
  bloom_time,
  zone_id,
  water_requirement_id,
  sun_requirement_id,
  soil_requirement_id,
  growth_habit_id,
  life_cycle_id,
}) => {
  try {
    // sun_requirement
    await prisma.plant.deleteMany();

    const plant = {
      id: uuid.v4(),
      plant_name: plant_name,
      plant_description: plant_description,
      max_height: max_height,
      max_width: max_width,
      bloom_time: bloom_time,
      zone_id: zone_id,
      water_requirement_id: water_requirement_id,
      sun_requirement_id: sun_requirement_id,
      soil_requirement_id: soil_requirement_id,
      growth_habit_id: growth_habit_id,
      life_cycle_id: life_cycle_id,
    };
    await prisma.plant.create({ data: plant });
    console.log(plant);
    return plant;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_plant };
