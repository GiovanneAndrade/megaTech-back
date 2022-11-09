/*
  Warnings:

  - You are about to drop the `_ProductsToRequests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductsToRequests" DROP CONSTRAINT "_ProductsToRequests_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductsToRequests" DROP CONSTRAINT "_ProductsToRequests_B_fkey";

-- DropTable
DROP TABLE "_ProductsToRequests";

-- CreateTable
CREATE TABLE "summary" (
    "id" SERIAL NOT NULL,
    "productsId" INTEGER NOT NULL,
    "requestsId" INTEGER NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "summary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "summary" ADD CONSTRAINT "summary_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "summary" ADD CONSTRAINT "summary_requestsId_fkey" FOREIGN KEY ("requestsId") REFERENCES "request"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
