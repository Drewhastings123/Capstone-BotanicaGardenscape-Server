const { prisma, bcrypt, uuid } = require("../../src/shared/shared");

const seed_growth_habit = async () => {
  try {
    // growth_habit
    await prisma.growth_habit.deleteMany({});
    const growth_habits = [
      {
        id: uuid.v4(),
        habit_name: "Mounding",
        description: "Mounded Growth",
      },
      {
        id: uuid.v4(),
        habit_name: "Trailing",
        description: "Trailing Growth",
      },
      {
        id: uuid.v4(),
        habit_name: "Spiking",
        description: "Tall",
      },
    ];
    await prisma.growth_habit.createMany({ data: growth_habits });
    console.log(growth_habits);
    return growth_habits;
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma Client
  }
};

module.exports = { seed_growth_habit };
