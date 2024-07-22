const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_plant_size = async () => {
  try {
    // plant_size
    await prisma.plant_size.deleteMany({});
    const plant_size = [
      {
        id: uuid.v4(),
        size_name: "Own",
        description: " ",
      },
      {
        id: uuid.v4(),
        size_name: "Purchase",
        description: " ",
      },
      {
        id: uuid.v4(),
        size_name: "Save For later",
        description: " ",
      },
    ];
    await prisma.plant_size.createMany({ data: plant_size });
    console.log(plant_size);
    return plant_size;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_plant_size };
