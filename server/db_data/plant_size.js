const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_plant_size = async () => {
  try {
    // plant_size
    await prisma.plant_size.deleteMany({});
    const plant_size = [
      {
        id: uuid.v4(),
        size_name: "4.5in",
        description: " ",
      },
      {
        id: uuid.v4(),
        size_name: "6in",
        description: " ",
      },
      {
        id: uuid.v4(),
        size_name: "8in",
        description: " ",
      },
      {
        id: uuid.v4(),
        size_name: "10in",
        description: " ",
      },
      {
        id: uuid.v4(),
        size_name: "1 gal",
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
