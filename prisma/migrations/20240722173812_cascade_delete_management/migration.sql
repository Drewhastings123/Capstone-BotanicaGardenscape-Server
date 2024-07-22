-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_user_id_fkey";

-- DropForeignKey
ALTER TABLE "garden" DROP CONSTRAINT "garden_shape_id_fkey";

-- DropForeignKey
ALTER TABLE "garden" DROP CONSTRAINT "garden_soil_requirement_id_fkey";

-- DropForeignKey
ALTER TABLE "garden" DROP CONSTRAINT "garden_sun_requirement_id_fkey";

-- DropForeignKey
ALTER TABLE "garden" DROP CONSTRAINT "garden_user_id_fkey";

-- DropForeignKey
ALTER TABLE "garden" DROP CONSTRAINT "garden_water_requirement_id_fkey";

-- DropForeignKey
ALTER TABLE "garden" DROP CONSTRAINT "garden_zone_id_fkey";

-- DropForeignKey
ALTER TABLE "garden_dimensions" DROP CONSTRAINT "garden_dimensions_garden_id_fkey";

-- DropForeignKey
ALTER TABLE "garden_plants" DROP CONSTRAINT "garden_plants_garden_id_fkey";

-- DropForeignKey
ALTER TABLE "garden_plants" DROP CONSTRAINT "garden_plants_plant_id_fkey";

-- DropForeignKey
ALTER TABLE "garden_plants" DROP CONSTRAINT "garden_plants_plant_status_id_fkey";

-- DropForeignKey
ALTER TABLE "plant" DROP CONSTRAINT "plant_growth_habit_id_fkey";

-- DropForeignKey
ALTER TABLE "plant" DROP CONSTRAINT "plant_life_cycle_id_fkey";

-- DropForeignKey
ALTER TABLE "plant" DROP CONSTRAINT "plant_soil_requirement_id_fkey";

-- DropForeignKey
ALTER TABLE "plant" DROP CONSTRAINT "plant_sun_requirement_id_fkey";

-- DropForeignKey
ALTER TABLE "plant" DROP CONSTRAINT "plant_water_requirement_id_fkey";

-- DropForeignKey
ALTER TABLE "plant" DROP CONSTRAINT "plant_zone_id_fkey";

-- DropForeignKey
ALTER TABLE "plant_inventory" DROP CONSTRAINT "plant_inventory_plant_id_fkey";

-- DropForeignKey
ALTER TABLE "plant_inventory" DROP CONSTRAINT "plant_inventory_plant_size_id_fkey";

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_shape_id_fkey" FOREIGN KEY ("shape_id") REFERENCES "shape"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_soil_requirement_id_fkey" FOREIGN KEY ("soil_requirement_id") REFERENCES "soil_requirement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_sun_requirement_id_fkey" FOREIGN KEY ("sun_requirement_id") REFERENCES "sun_requirement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_water_requirement_id_fkey" FOREIGN KEY ("water_requirement_id") REFERENCES "water_requirement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_zone_id_fkey" FOREIGN KEY ("zone_id") REFERENCES "zone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garden_dimensions" ADD CONSTRAINT "garden_dimensions_garden_id_fkey" FOREIGN KEY ("garden_id") REFERENCES "garden"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garden_plants" ADD CONSTRAINT "garden_plants_garden_id_fkey" FOREIGN KEY ("garden_id") REFERENCES "garden"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garden_plants" ADD CONSTRAINT "garden_plants_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "plant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garden_plants" ADD CONSTRAINT "garden_plants_plant_status_id_fkey" FOREIGN KEY ("plant_status_id") REFERENCES "plant_status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_growth_habit_id_fkey" FOREIGN KEY ("growth_habit_id") REFERENCES "growth_habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_life_cycle_id_fkey" FOREIGN KEY ("life_cycle_id") REFERENCES "life_cycle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_soil_requirement_id_fkey" FOREIGN KEY ("soil_requirement_id") REFERENCES "soil_requirement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_sun_requirement_id_fkey" FOREIGN KEY ("sun_requirement_id") REFERENCES "sun_requirement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_water_requirement_id_fkey" FOREIGN KEY ("water_requirement_id") REFERENCES "water_requirement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant" ADD CONSTRAINT "plant_zone_id_fkey" FOREIGN KEY ("zone_id") REFERENCES "zone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant_inventory" ADD CONSTRAINT "plant_inventory_plant_id_fkey" FOREIGN KEY ("plant_id") REFERENCES "plant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant_inventory" ADD CONSTRAINT "plant_inventory_plant_size_id_fkey" FOREIGN KEY ("plant_size_id") REFERENCES "plant_size"("id") ON DELETE CASCADE ON UPDATE CASCADE;
