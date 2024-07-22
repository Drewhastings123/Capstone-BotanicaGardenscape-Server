const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_user_role = async () => {
  try {
    // user_role
    await prisma.user_role.deleteMany({});
    const user_roles = [
      { id: uuid.v4(), role_name: "Admin" },
      { id: uuid.v4(), role_name: "Customer" },
    ];
    await prisma.user_role.createMany({ data: user_roles });
    console.log(user_roles);

    return user_roles;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_user_role };
