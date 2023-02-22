/*
  Warnings:

  - You are about to drop the column `testeId` on the `address` table. All the data in the column will be lost.
  - You are about to alter the column `cep` on the `address` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `number` on the `address` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to drop the `Pessoa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_testeId_fkey";

-- AlterTable
ALTER TABLE "address" DROP COLUMN "testeId",
ALTER COLUMN "cep" SET DATA TYPE INTEGER,
ALTER COLUMN "number" SET DATA TYPE INTEGER;

-- DropTable
DROP TABLE "Pessoa";
