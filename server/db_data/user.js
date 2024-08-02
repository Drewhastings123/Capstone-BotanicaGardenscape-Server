const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_user = async ({
  zone_id,
  user_role_id,
  email,
  password,
  firstname,
  lastname,
  g_description,
  g_zone_id,
  g_water_requirement_id,
  g_sun_requirement_id,
  g_soil_requirement_id,
  g_shape_id,
}) => {
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const customerInfo = {
      id: uuid.v4(),
      email,
      password: hashPassword,
      firstname,
      lastname,
      zone_id,
      user_role_id,
    };

    const returnInfo = await prisma.user.create({ data: customerInfo });

    const garden = {
      id: uuid.v4(),
      description: g_description,
      user_id: returnInfo.id,
      zone_id: g_zone_id,
      shape_id: g_shape_id,
      water_requirement_id: g_water_requirement_id,
      sun_requirement_id: g_sun_requirement_id,
      soil_requirement_id: g_soil_requirement_id,
    };

    const newGarden = await prisma.garden.create({ data: garden });
    console.log("new garden", newGarden);

    return returnInfo;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_user };
