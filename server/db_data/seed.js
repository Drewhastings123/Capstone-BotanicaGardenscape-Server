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
const { seed_plant } = require("./plant.js");
const { additional_plants } = require("./additional_plants.js");
const { additional_garden_plants } = require("./additional_garden_plants.js");
// const { seed2 } = require("./seed2.js");

const seed = async () => {
  // Function exists - may be out of date
  // await seed_delete_dependent_data();
  // Design Decision (7/22):
  //   Use Prisma onDelete: Cascade and OnUpdate: Cascade
  //   for foreign relation deletion management
  //   so the DB will manage the dependency delete order.
  //   This is good for development and expediency, may be a bad decision
  //   for production environment application

  const [growth, life, plant_sz, plant_st, shape, soil, sun, user, water, zn] =
    [
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

  const [plant1, plant2, plant3, plant4] = [
    seed_plant({
      plant_name: "Echinacea",
      plant_description:
        "Cone Flower - attracts butterflies and songbirds, zones 3 - 9",
      max_height: "24in",
      max_width: "20in",
      bloom_time: "Summer, Fall",
      zone_id: zn[5].id,
      water_requirement_id: water[0].id,
      sun_requirement_id: sun[0].id,
      soil_requirement_id: soil[0].id,
      growth_habit_id: growth[0].id,
      life_cycle_id: life[1].id,
    }),
    seed_plant({
      plant_name: "Monarda",
      plant_description:
        "Bee Balm - attracts butterflies and songbirds, zones 3 - 9",
      max_height: "36in - 48in",
      max_width: "20in",
      bloom_time: "Summer",
      zone_id: zn[5].id,
      water_requirement_id: water[0].id,
      sun_requirement_id: sun[0].id,
      soil_requirement_id: soil[0].id,
      growth_habit_id: growth[0].id,
      life_cycle_id: life[1].id,
    }),
    seed_plant({
      plant_name: "Euphorbia Polychroma",
      plant_description: "Cushion Spurge - attracts butterflies, zones 3 - 9",
      max_height: "18in",
      max_width: "28in",
      bloom_time: "Summer",
      zone_id: zn[7].id,
      water_requirement_id: water[0].id,
      sun_requirement_id: sun[0].id,
      soil_requirement_id: soil[3].id,
      growth_habit_id: growth[0].id,
      life_cycle_id: life[1].id,
    }),
  ];

  additional_plants({
    growth,
    life,
    plant_sz,
    plant_st,
    shape,
    soil,
    sun,
    user,
    water,
    zn,
  });

  const [customer1, customer2, customer3] = [
    seed_user({
      email: "monty@smallGardens.com",
      password: "theMonty",
      firstname: "Monty",
      lastname: "Don",
      zone_id: zn[5].id,
      user_role_id: user[1].id,
      g_description: "Lovely Lane",
      g_zone_id: zn[12].id,
      g_water_requirement_id: water[3].id,
      g_sun_requirement_id: sun[2].id,
      g_soil_requirement_id: soil[2].id,
      g_shape_id: shape[0].id,
    }),
    seed_user({
      email: "renaee@highlandGardens.com",
      password: "theHighlands",
      firstname: "Renee",
      lastname: "RayOfSunshine",
      zone_id: zn[8].id,
      user_role_id: user[0].id,
      g_description: "Pretty in Pink",
      g_zone_id: zn[10].id,
      g_water_requirement_id: water[1].id,
      g_sun_requirement_id: sun[1].id,
      g_soil_requirement_id: soil[1].id,
      g_shape_id: shape[2].id,
    }),
    seed_user({
      email: "patti@plumnCreekGardens.com",
      password: "thePlum",
      firstname: "Patti",
      lastname: "Plum",
      zone_id: zn[15].id,
      user_role_id: user[1].id,
      g_description: "Sunny for Days",
      g_zone_id: zn[16].id,
      g_water_requirement_id: water[0].id,
      g_sun_requirement_id: sun[0].id,
      g_soil_requirement_id: soil[1].id,
      g_shape_id: shape[0].id,
    }),
  ];
};

if (require.main === module) {
  seed();
  //seed2();
}

module.exports = seed;
