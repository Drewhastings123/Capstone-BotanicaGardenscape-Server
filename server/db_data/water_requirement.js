const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_water_requirement = async () => {
  try {
    // water_requirement
    await prisma.water_requirement.deleteMany({});
    const water_requirements = [
      {
        id: uuid.v4(),
        water_name: "Dry",
        description: "1 Time Per Week",
      },
      {
        id: uuid.v4(),
        water_name: "Moderate",
        description: "2 Times Per Week",
      },
      {
        id: uuid.v4(),
        water_name: "Damp",
        description: "3 Times Per Week",
      },
      {
        id: uuid.v4(),
        water_name: "Moist",
        description: "3 Times Per Week",
      },
      {
        id: uuid.v4(),
        water_name: "Wet",
        description: "4 Times Per Week",
      },
    ];
    await prisma.water_requirement.createMany({ data: water_requirements });
    console.log(water_requirements);
    return water_requirements;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_water_requirement };
