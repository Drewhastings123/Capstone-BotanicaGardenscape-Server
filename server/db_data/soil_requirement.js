const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_soil_requirement = async () => {
  try {
    // soil_requirement
    await prisma.soil_requirement.deleteMany({});
    const soil_requirements = [
      {
        id: uuid.v4(),
        soil_name: "Loam Soil'",
        description: "40% Sand, 40% Silt, 20% Clay",
      },
      {
        id: uuid.v4(),
        soil_name: "Clay Soil",
        description: "50% Clay'",
      },
      {
        id: uuid.v4(),
        soil_name: "Sandy Soil",
        description: "Gritty",
      },
      {
        id: uuid.v4(),
        soil_name: "Silty Soil",
        description: "80% Silt",
      },
      {
        id: uuid.v4(),
        soil_name: "Chalk Soil",
        description: "Chalk and Limestone, alkaline (pH 7.1 and above)",
      },
      {
        id: uuid.v4(),
        soil_name: "Peat Soil",
        description: "Peat, acidic (pH 7.0 and below)",
      },
    ];
    await prisma.soil_requirement.createMany({ data: soil_requirements });
    console.log(soil_requirements);
    return soil_requirements;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_soil_requirement };
