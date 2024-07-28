-- AlterTable
ALTER TABLE "plant" ADD COLUMN     "image_name" VARCHAR(64),
ADD COLUMN     "image_path" VARCHAR(255) NOT NULL DEFAULT 'src/assets/pants/';
