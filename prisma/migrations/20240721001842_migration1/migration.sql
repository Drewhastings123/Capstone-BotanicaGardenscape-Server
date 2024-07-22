-- CreateTable
CREATE TABLE "address" (
    "id" UUID NOT NULL,
    "address_line_1" VARCHAR(64),
    "address_line_2" VARCHAR(64),
    "city" VARCHAR(64),
    "zip" VARCHAR(64),
    "state" VARCHAR(64),

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "garden" (
    "id" UUID NOT NULL,
    "description" VARCHAR(255) DEFAULT 'garden',
    "user_id" UUID NOT NULL,
    "zone_id" UUID NOT NULL,
    "shape_id" UUID NOT NULL,
    "water_requirement_id" UUID NOT NULL,
    "sun_requirement_id" UUID NOT NULL,
    "soil_requirement_id" UUID NOT NULL,

    CONSTRAINT "garden_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "garden_dimensions" (
    "id" UUID NOT NULL,
    "garden_id" UUID NOT NULL,
    "sequence_value" INTEGER NOT NULL,
    "measurement_inches" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "garden_dimensions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "garden_plants" (
    "id" UUID NOT NULL,
    "plant_location_x" INTEGER NOT NULL,
    "plant_location_y" INTEGER NOT NULL,
    "plant_status_id" UUID NOT NULL,
    "plant_id" UUID NOT NULL,
    "garden_id" UUID NOT NULL,

    CONSTRAINT "garden_plants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "growth_habit" (
    "id" UUID NOT NULL,
    "habit_name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "growth_habit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "life_cycle" (
    "id" UUID NOT NULL,
    "life_cycle_name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "life_cycle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant" (
    "id" UUID NOT NULL,
    "max_height" VARCHAR(64) NOT NULL,
    "max_width" VARCHAR(64) NOT NULL,
    "bloom_time" VARCHAR(255) NOT NULL,
    "available_for_sale" BOOLEAN NOT NULL DEFAULT false,
    "zone_id" UUID NOT NULL,
    "water_requirement_id" UUID NOT NULL,
    "sun_requirement_id" UUID NOT NULL,
    "soil_requirement_id" UUID NOT NULL,
    "growth_habit_id" UUID NOT NULL,
    "life_cycle_id" UUID NOT NULL,

    CONSTRAINT "plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_inventory" (
    "id" UUID NOT NULL,
    "plant_id" UUID NOT NULL,
    "plant_size_id" UUID NOT NULL,
    "in_stock" INTEGER NOT NULL DEFAULT 0,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 10.0,

    CONSTRAINT "plant_inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_size" (
    "id" UUID NOT NULL,
    "size_name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "plant_size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_status" (
    "id" UUID NOT NULL,
    "status_name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "plant_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shape" (
    "id" UUID NOT NULL,
    "shape_name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "image_url" VARCHAR(255) NOT NULL,
    "no_of_dimensions" INTEGER NOT NULL,

    CONSTRAINT "shape_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soil_requirement" (
    "id" UUID NOT NULL,
    "soil_name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "soil_requirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sun_requirement" (
    "id" UUID NOT NULL,
    "sun_name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "sun_requirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_desc" (
    "id" UUID NOT NULL,
    "firstname" VARCHAR(64) NOT NULL,
    "lastname" VARCHAR(64) NOT NULL,
    "username" VARCHAR(32) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(64),
    "email" VARCHAR(64) NOT NULL,
    "user_role_id" UUID NOT NULL,
    "address_id" UUID NOT NULL,
    "zone_id" UUID NOT NULL,

    CONSTRAINT "user_desc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_role" (
    "id" UUID NOT NULL,
    "role_name" VARCHAR(64) NOT NULL,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "water_requirement" (
    "id" UUID NOT NULL,
    "water_name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "water_requirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zone" (
    "id" UUID NOT NULL,
    "zone_name" VARCHAR(64) NOT NULL,
    "temp_range" VARCHAR(64) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "zone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "plant_inventory_plant_id_in_stock_plant_size_id_key" ON "plant_inventory"("plant_id", "in_stock", "plant_size_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_desc_username_key" ON "user_desc"("username");

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_shape_id_fkey" FOREIGN KEY ("shape_id") REFERENCES "shape"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_soil_requirement_id_fkey" FOREIGN KEY ("soil_requirement_id") REFERENCES "soil_requirement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_sun_requirement_id_fkey" FOREIGN KEY ("sun_requirement_id") REFERENCES "sun_requirement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_desc"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_water_requirement_id_fkey" FOREIGN KEY ("water_requirement_id") REFERENCES "water_requirement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_zone_id_fkey" FOREIGN KEY ("zone_id") REFERENCES "zone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "garden_dimensions" ADD CONSTRAINT "garden_dimensions_garden_id_fkey" FOREIGN KEY ("garden_id") REFERENCES "garden"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "garden_plants" ADD CONSTRAINT "garden_plants_garden_id_fkey" FOREIGN KEY ("garden_id") REFERENCES "garden"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "garden_plants" ADD CONSTRAINT "garden_plants_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "plant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "garden_plants" ADD CONSTRAINT "garden_plants_plant_status_id_fkey" FOREIGN KEY ("plant_status_id") REFERENCES "plant_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_growth_habit_id_fkey" FOREIGN KEY ("growth_habit_id") REFERENCES "growth_habit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_life_cycle_id_fkey" FOREIGN KEY ("life_cycle_id") REFERENCES "life_cycle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_soil_requirement_id_fkey" FOREIGN KEY ("soil_requirement_id") REFERENCES "soil_requirement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_sun_requirement_id_fkey" FOREIGN KEY ("sun_requirement_id") REFERENCES "sun_requirement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_water_requirement_id_fkey" FOREIGN KEY ("water_requirement_id") REFERENCES "water_requirement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_zone_id_fkey" FOREIGN KEY ("zone_id") REFERENCES "zone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plant_inventory" ADD CONSTRAINT "plant_inventory_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "plant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plant_inventory" ADD CONSTRAINT "plant_inventory_plant_size_id_fkey" FOREIGN KEY ("plant_size_id") REFERENCES "plant_size"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
