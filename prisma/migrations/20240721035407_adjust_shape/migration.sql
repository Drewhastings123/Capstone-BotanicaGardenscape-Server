/*
  Warnings:

  - You are about to drop the column `image_url` on the `shape` table. All the data in the column will be lost.
  - Added the required column `css_class` to the `shape` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "shape" DROP COLUMN "image_url",
ADD COLUMN     "css_class" VARCHAR(255) NOT NULL;
