-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_user_role_id_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_zone_id_fkey";

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_zone_id_fkey" FOREIGN KEY ("zone_id") REFERENCES "zone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_user_role_id_fkey" FOREIGN KEY ("user_role_id") REFERENCES "user_role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
