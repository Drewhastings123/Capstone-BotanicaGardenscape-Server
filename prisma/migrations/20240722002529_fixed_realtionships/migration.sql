/*
  Warnings:

  - You are about to drop the `user_desc` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "garden" DROP CONSTRAINT "garden_user_id_fkey";

-- AlterTable
ALTER TABLE "address" ADD COLUMN     "user_id" UUID NOT NULL;

-- DropTable
DROP TABLE "user_desc";

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "firstname" VARCHAR(64) NOT NULL,
    "lastname" VARCHAR(64) NOT NULL,
    "username" VARCHAR(32) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(64),
    "email" VARCHAR(64) NOT NULL,
    "user_role_id" UUID NOT NULL,
    "zone_id" UUID NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "garden" ADD CONSTRAINT "garden_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_zone_id_fkey" FOREIGN KEY ("zone_id") REFERENCES "zone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_user_role_id_fkey" FOREIGN KEY ("user_role_id") REFERENCES "user_role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
