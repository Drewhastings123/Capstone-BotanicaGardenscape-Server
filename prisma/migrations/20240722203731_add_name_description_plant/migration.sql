/*
  Warnings:

  - Added the required column `plant_description` to the `plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plant_name` to the `plant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "plant" ADD COLUMN     "plant_description" VARCHAR(255) NOT NULL,
ADD COLUMN     "plant_name" VARCHAR(64) NOT NULL;
