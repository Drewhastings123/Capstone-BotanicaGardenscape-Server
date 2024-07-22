const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_life_cycle = async () => {
  try {
    // life_cycle
    await prisma.life_cycle.deleteMany({});
    const life_cycles = [
      {
        id: uuid.v4(),
        life_cycle_name: "Annual",
        description: "Single Season",
      },
      {
        id: uuid.v4(),
        life_cycle_name: "Perennial",
        description: "Multi Season",
      },
      {
        id: uuid.v4(),
        life_cycle_name: "BiAnnual",
        description: "2 Season",
      },
    ];
    await prisma.life_cycle.createMany({ data: life_cycles });
    console.log(life_cycles);
    return life_cycles;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_life_cycle };
