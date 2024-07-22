const { prisma } = require("../../src/shared/shared");

const seed_delete_dependent_data = async () => {
  try {

    // garden_dimensions - dependent on garden
    // garden_plants - dependent on garden, plant
    // cart_garden_plants - not yet created
    
    // garden - dependent on user

    // plant_inventory - dependent on plant
    // plant

    // address - dependent on user
    // user

    await prisma.garden_plants.deleteMany({});

    // garden_plants - dependent on garden, plant
    await prisma.garden.deleteMany({});
    await prisma.plant_inventory.deleteMany({});
    await prisma.plant.deleteMany({});
    
    await prisma.address.deleteMany({});
    await prisma.user.deleteMany({});

  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_delete_dependent_data };
