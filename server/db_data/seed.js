const { prisma, bcrypt, uuid } = require("../../src/shared/shared.js");

const { seed_growth_habit } = require("./growth_habit.js");
const { seed_life_cycle } = require("./life_cycle.js");
const { seed_plant_size } = require("./plant_size.js");
const { seed_plant_status } = require("./plant_status.js");
const { seed_shape } = require("./shape.js");
const { seed_soil_requirement } = require("./soil_requirement.js");
const { seed_sun_requirement } = require("./sun_requirement.js");
const { seed_user_role } = require("./user_role.js");
const { seed_water_requirement } = require("./water_requirement.js");
const { seed_zone } = require("./zone.js");
const { seed_user } = require("./user.js");

const seed = async () => {

  const [growth, life, plant_sz, plant_st, shpe, soil, sun, user, water, zn] = [
    await seed_growth_habit(),
    await seed_life_cycle(),
    await seed_plant_size(),
    await seed_plant_status(),
    await seed_shape(),
    await seed_soil_requirement(),
    await seed_sun_requirement(),
    await seed_user_role(),
    await seed_water_requirement(),
    await seed_zone(),
  ];


   zn.forEach((zne) => {console.log(`zone: ${zne}`)});
  console.log(`user_role: ${user}`);

  const [customer1, customer2, customer3] = [
    seed_user({
      email: "monty@smallGardens.com",
      username: "monty@don",
      password: "theMonty",
      firstname: "Monty",
      lastname: "Don",
      zone_id: zn[5].zone_id,
      user_role_id: user[0].user_role_id,
    }),
    seed_user({
      email: "renaee@highlandGardens.com",
      username: "renaee@highlands",
      password: "theHighlands",
      firstname: "Renee",
      lastname: "RayOfSunshine",
      zone_id: zn[8],
      user_role_id: user[0],
    }),
    seed_user({
      email: "patti@plumnCreekGardens.com",
      username: "patti@plum",
      password: "thePlum",
      firstname: "Patti",
      lastname: "Plum",
      zone_id: zn[15],
      user_role_id: user[1],
    }),
  ];

  // TO DO Create some
  // development data
  // plants
  // users
  // gardens and etc
};

if (require.main === module) {
  seed();
}

module.exports = seed;
