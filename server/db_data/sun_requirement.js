const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_sun_requirement = async () => {
  try {
    // sun_requirement
    await prisma.sun_requirement.deleteMany({});
    const sun_requirements = [
      {
        id: uuid.v4(),
        sun_name: "Full Sun",
        description: "6 or more hours per day",
      },
      {
        id: uuid.v4(),
        sun_name: "Part Sun",
        description: "3-6 hours per day",
      },
      {
        id: uuid.v4(),
        sun_name: "Part Shade",
        description: "3-6 hours per day",
      },
      {
        id: uuid.v4(),
        sun_name: "Shade",
        description: "3 or less hours per day",
      },
    ];
    await prisma.sun_requirement.createMany({ data: sun_requirements });
    console.log(sun_requirements);
    return sun_requirements;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_sun_requirement };
