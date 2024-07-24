const { prisma } = require("../shared/shared");

const getAllReferenceQuery = async () => {
  let plantList;
  let growthHabitList;
  let lifeCycleList;
  let plantSizeList;
  let plantStatusList;
  let shapeList;
  let soilRequirementList;
  let sunRequirementList;
  let userRoleList;
  let waterRequirementList;
  let zoneList;

  try {
    plantList = await prisma.plant.findMany({
      where: {},
    });

    growthHabitList = await prisma.growth_habit.findMany({
      where: {},
    });

    lifeCycleList = await prisma.life_cycle.findMany({
      where: {},
    });

    plantSizeList = await prisma.plant_size.findMany({
      where: {},
    });

    plantStatusList = await prisma.plant_status.findMany({
      where: {},
    });

    shapeList = await prisma.shape.findMany({
      where: {},
    });

    soilRequirementList = await prisma.soil_requirement.findMany({
      where: {},
    });

    sunRequirementList = await prisma.sun_requirement.findMany({
      where: {},
    });

    userRoleList = await prisma.user_role.findMany({
      where: {},
    });

    waterRequirementList = await prisma.water_requirement.findMany({
      where: {},
    });

    zoneList = await prisma.zone.findMany({
      where: {},
    });

    return {
      plantList,
      growthHabitList,
      lifeCycleList,
      plantSizeList,
      plantStatusList,
      shapeList,
      soilRequirementList,
      sunRequirementList,
      userRoleList,
      waterRequirementList,
      zoneList,
    };
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReferenceQuery,
};
