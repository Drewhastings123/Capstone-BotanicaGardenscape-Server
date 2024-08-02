const { prisma, uuid } = require("../../src/shared/shared");

const additional_garden_plants = async () => {
  const gardenList = await prisma.garden.findMany({});
  console.log(gardenList);

  const plantList = await prisma.plant.findMany({});
  console.log(plantList);

  const plantStatus = await prisma.plant_status.findMany({});
  console.log(plantStatus);

  //I know I have only created three gardens just now
  const garden_plants = [
    {
      id: uuid.v4(),
      plant_location_x: Math.floor(Math.random() * 5),
      plant_location_y: Math.floor(Math.random() * 5),
      plant_status_id: plantStatus[0].id,
      plant_id: plantList[Math.floor(Math.random() * 15)].id,
      garden_id: gardenList[0].id,
    },
    {
      id: uuid.v4(),
      plant_location_x: Math.floor(Math.random() * 5),
      plant_location_y: Math.floor(Math.random() * 5),
      plant_status_id: plantStatus[0].id,
      plant_id: plantList[Math.floor(Math.random() * 15)].id,
      garden_id: gardenList[0].id,
    },
    {
      id: uuid.v4(),
      plant_location_x: Math.floor(Math.random() * 5),
      plant_location_y: Math.floor(Math.random() * 5),
      plant_status_id: plantStatus[0].id,
      plant_id: plantList[Math.floor(Math.random() * 15)].id,
      garden_id: gardenList[0].id,
    },
    {
      id: uuid.v4(),
      plant_location_x: Math.floor(Math.random() * 5),
      plant_location_y: Math.floor(Math.random() * 5),
      plant_status_id: plantStatus[0].id,
      plant_id: plantList[Math.floor(Math.random() * 15)].id,
      garden_id: gardenList[1].id,
    },
    {
      id: uuid.v4(),
      plant_location_x: Math.floor(Math.random() * 5),
      plant_location_y: Math.floor(Math.random() * 5),
      plant_status_id: plantStatus[0].id,
      plant_id: plantList[Math.floor(Math.random() * 15)].id,
      garden_id: gardenList[1].id,
    },
    {
      id: uuid.v4(),
      plant_location_x: Math.floor(Math.random() * 5),
      plant_location_y: Math.floor(Math.random() * 5),
      plant_status_id: plantStatus[0].id,
      plant_id: plantList[Math.floor(Math.random() * 15)].id,
      garden_id: gardenList[1].id,
    },
    {
      id: uuid.v4(),
      plant_location_x: Math.floor(Math.random() * 5),
      plant_location_y: Math.floor(Math.random() * 5),
      plant_status_id: plantStatus[0].id,
      plant_id: plantList[Math.floor(Math.random() * 15)].id,
      garden_id: gardenList[2].id,
    },
    {
      id: uuid.v4(),
      plant_location_x: Math.floor(Math.random() * 5),
      plant_location_y: Math.floor(Math.random() * 5),
      plant_status_id: plantStatus[0].id,
      plant_id: plantList[Math.floor(Math.random() * 15)].id,
      garden_id: gardenList[2].id,
    },
    {
      id: uuid.v4(),
      plant_location_x: Math.floor(Math.random() * 5),
      plant_location_y: Math.floor(Math.random() * 5),
      plant_status_id: plantStatus[0].id,
      plant_id: plantList[Math.floor(Math.random() * 15)].id,
      garden_id: gardenList[2].id,
    },
  ];

  const returnedGardenPlants = await prisma.garden_plants.createMany({
    data: garden_plants,
  });

  console.log("returnedGardenPlants: ", returnedGardenPlants);
};

module.exports = { additional_garden_plants };
