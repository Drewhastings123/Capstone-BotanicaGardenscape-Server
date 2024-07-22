const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_plant_status = async () => {
  try {
    // plant_status
    await prisma.plant_status.deleteMany({});
    const plant_status = [
      {
        id: uuid.v4(),
        status_name: "Own",
        description: " ",
      },
      {
        id: uuid.v4(),
        status_name: "Purchase",
        description: " ",
      },
      {
        id: uuid.v4(),
        status_name: "Save For later",
        description: " ",
      },
    ];
    await prisma.plant_status.createMany({ data: plant_status });
    console.log(plant_status);
    return plant_status;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_plant_status };
