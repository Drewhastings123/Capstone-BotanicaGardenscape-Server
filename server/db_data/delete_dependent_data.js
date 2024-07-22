const { prisma } = require("../../src/shared/shared");

const seed_delete_dependent_data = async () => {
  try {
    //
    await prisma.user.deleteMany({});
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_delete_dependent_data };
