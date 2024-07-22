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
const { seed_delete_dependent_data } = require("./delete_dependent_data.js");
const { seed_user } = require("./user.js");

const seed = async () => {



  // Function exists - may be out of date
  // await seed_delete_dependent_data();
  // Design Decision (7/22):  
  //   Use Prisma onDelete: Cascade and OnUpdate: Cascade 
  //   for foreign relation deletion management
  //   so the DB will manage the dependency delete order.
  //   This is good for development and expediency, may be a bad decision
  //   for production environment application


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

  const [customer1, customer2, customer3] = [
    seed_user({
      email: "monty@smallGardens.com",
      password: "theMonty",
      firstname: "Monty",
      lastname: "Don",
      zone_id: zn[5].id,
      user_role_id: user[1].id,
    }),
    seed_user({
      email: "renaee@highlandGardens.com",
      password: "theHighlands",
      firstname: "Renee",
      lastname: "RayOfSunshine",
      zone_id: zn[8].id,
      user_role_id: user[0].id,
    }),
    seed_user({
      email: "patti@plumnCreekGardens.com",
      password: "thePlum",
      firstname: "Patti",
      lastname: "Plum",
      zone_id: zn[15].id,
      user_role_id: user[1].id,
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
