# Capstone-BotanicaGardenscape-Server

Botanic Gardenscape - FloraForma extraordinaire - Server

# Link to project planner

[https://github.com/users/Drewhastings123/projects/5](https://github.com/users/CLBaxter-W/projects/8)

# Create the backend project

- reference: https://nodesource.com/blog/the-basics-of-package-json/
- $ npm init // initialize directory and create package.json
- $ npm i express uuid bcrypt nodemon morgan jsonwebtoken
- $ npm i prisma @prisma/client cors

- $ createDB garden_design
- Create the db schema using SQL (currently ./capstone_documents/2024.7.19_databaseSchema.js)
- wrap the db layer in prisma
- https://www.prisma.io/docs/orm/prisma-schema
- https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate/troubleshooting-development
- create the prisma directory and the schema.prisma file
- $ npx prisma db pull // generate the prisma schema based on the tables created in the db
- $ npx prisma generate // generate the prisma client

- $ npx prisma migrate dev --name what is being updated // If needed migrates db schema - will delete all data in the db
- $ npx prisma studio // to view DB online

- $ touch .gitignore // ignore files for github
- $ touch .env // hidden variables
  ------- DATABASE_URL="postgresql://postgres:@localhost:5432/garden_design?schema=public"
  ------- WEB_TOKEN = process.env.JWT || "Its a secret garden";
- $ edit package.json to add 'build', 'seed' and 'run' paths
  ---- "server:dev": "nodemon server/index.js",
  ---- "server": "node server/index.js",
  ---- "seed": "node server/db_data/seed.js && node server/db_data/seed2.js "

# Create Directory Tree

- server - index.js
- server/db_data/seed.js ... + the additional seed files
- src - controllers - UserControllers.js
- src - queries - UserQueries.js
- src - routes - UserRoutes.js
- src - shared - shared.js

# main table dependencies

- garden_dimensions - dependent on garden
- garden_plants - dependent on garden, plant
- cart_garden_plants - not yet created
- garden - dependent on user
- plant_inventory - dependent on plant
- plant
- address - dependent on user
- user

- each main table dependent on 1 or more reference tables
- growth_habit, life_cycle, plant_size, plant_status, shape,
- soil_requirement, sun_requirement, seed_user_role,
- seed_water_requirement, seed_zone()
