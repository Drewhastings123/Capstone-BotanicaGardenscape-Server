const { registerQuery } = require("../../src/queries/UserQueries");

const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_user = async ({
  zone_id,
  user_role_id,
  email,
  username,
  password,
  firstname,
  lastname,
}) => {
  try {
    const returnInfo = await registerQuery({
      email,
      username,
      password,
      firstname,
      lastname,
      zone_id,
      user_role_id,
    });

    console.log("new user", returnnInfo.registerUser);

    return returnInfo.registerUser;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_user };
