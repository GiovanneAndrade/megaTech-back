/*
  Warnings:

  - You are about to drop the `_HistoricToProducts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productsId` to the `historic` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_HistoricToProducts" DROP CONSTRAINT "_HistoricToProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_HistoricToProducts" DROP CONSTRAINT "_HistoricToProducts_B_fkey";

-- AlterTable
ALTER TABLE "historic" ADD COLUMN     "productsId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_HistoricToProducts";

-- AddForeignKey
ALTER TABLE "historic" ADD CONSTRAINT "historic_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
