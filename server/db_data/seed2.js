const { prisma, bcrypt, uuid } = require("../../src/shared/shared.js");

const { additional_garden_plants } = require("./additional_garden_plants.js");

const seed2 = async () => {
  additional_garden_plants();
};

if (require.main === module) {
  seed2();
}

module.exports = { seed2 };
