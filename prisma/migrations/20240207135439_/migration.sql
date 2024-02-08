/*
  Warnings:

  - You are about to drop the column `productsId` on the `historic` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "historic" DROP CONSTRAINT "historic_productsId_fkey";

-- AlterTable
ALTER TABLE "historic" DROP COLUMN "productsId";

-- CreateTable
CREATE TABLE "_HistoricToProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HistoricToProducts_AB_unique" ON "_HistoricToProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_HistoricToProducts_B_index" ON "_HistoricToProducts"("B");

-- AddForeignKey
ALTER TABLE "_HistoricToProducts" ADD CONSTRAINT "_HistoricToProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "historic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HistoricToProducts" ADD CONSTRAINT "_HistoricToProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
