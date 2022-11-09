/*
  Warnings:

  - You are about to drop the `summary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "summary" DROP CONSTRAINT "summary_productsId_fkey";

-- DropForeignKey
ALTER TABLE "summary" DROP CONSTRAINT "summary_requestsId_fkey";

-- DropTable
DROP TABLE "summary";

-- CreateTable
CREATE TABLE "_ProductsToRequests" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsToRequests_AB_unique" ON "_ProductsToRequests"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsToRequests_B_index" ON "_ProductsToRequests"("B");

-- AddForeignKey
ALTER TABLE "_ProductsToRequests" ADD CONSTRAINT "_ProductsToRequests_A_fkey" FOREIGN KEY ("A") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToRequests" ADD CONSTRAINT "_ProductsToRequests_B_fkey" FOREIGN KEY ("B") REFERENCES "request"("id") ON DELETE CASCADE ON UPDATE CASCADE;
