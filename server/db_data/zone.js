const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_zone = async () => {
  try {
    // zone
    await prisma.zone.deleteMany({});
    const zones = [
      {
        id: uuid.v4(),
        zone_name: "1a",
        temp_range: "-60 to -55 (F)",
        description: "Very Cold",
      },

      {
        id: uuid.v4(),
        zone_name: "1b",
        temp_range: "-55 to -50 (F)",
        description: "Very Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "2a",
        temp_range: "-50 to -45 (F)",
        description: "Very Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "2b",
        temp_range: "-45 to -40 (F)",
        description: "Very Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "3a",
        temp_range: "-40 to -35 (F)",
        description: "Very Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "3b",
        temp_range: "-35 to -30 (F)",
        description: "Very Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "4a",
        temp_range: "-30 to -25 (F)",
        description: "Very Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "4b",
        temp_range: "-25 to -20 (F)",
        description: "Very Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "5a",
        temp_range: "-20 to -15 (F)",
        description: "Very Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "5b",
        temp_range: "-15 to -10 (F)",
        description: "Very Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "6a",
        temp_range: "-10 to -5 (F)",
        description: "Very Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "6b",
        temp_range: "-5 to -0 (F)",
        description: "Very Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "7a",
        temp_range: "0 to 5 (F)",
        description: "Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "7b",
        temp_range: "5 to 10 (F)",
        description: "Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "8a",
        temp_range: "10 to 15 (F)",
        description: "Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "8b",
        temp_range: "15 to 20 (F)",
        description: "Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "9a",
        temp_range: "20 to 25 (F)",
        description: "Cold",
      },
      {
        id: uuid.v4(),
        zone_name: "9b",
        temp_range: "25 to 30 (F)",
        description: "Chilli",
      },
      {
        id: uuid.v4(),
        zone_name: "10a",
        temp_range: "30 to 35 (F)",
        description: "Chilli",
      },
      {
        id: uuid.v4(),
        zone_name: "10b",
        temp_range: "35 to 40 (F)",
        description: "Temperate",
      },
      {
        id: uuid.v4(),
        zone_name: "11a",
        temp_range: "40 to 45 (F)",
        description: "Temperate",
      },
      {
        id: uuid.v4(),
        zone_name: "11b",
        temp_range: "45 to 50 (F)",
        description: "Warm",
      },
      {
        id: uuid.v4(),
        zone_name: "12a",
        temp_range: "50 to 55 (F)",
        description: "Really Warm",
      },
      {
        id: uuid.v4(),
        zone_name: "12b",
        temp_range: "55 to 60 (F)",
        description: "Really Really Warm",
      },
      {
        id: uuid.v4(),
        zone_name: "13a",
        temp_range: "60 to 65 (F)",
        description: "Hot",
      },
      {
        id: uuid.v4(),
        zone_name: "13b",
        temp_range: "65 to 70 (F)",
        description: "Hot Hot",
      },
    ];
    await prisma.zone.createMany({ data: zones });
    console.log(zones);

    return zones;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_zone };
