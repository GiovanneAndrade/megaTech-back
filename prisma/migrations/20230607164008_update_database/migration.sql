/*
  Warnings:

  - You are about to drop the column `quantity` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "quantity",
ADD COLUMN     "stoke" DECIMAL(65,30);

-- CreateTable
CREATE TABLE "product_quantity" (
    "id" SERIAL NOT NULL,
    "requestId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "product_quantity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_quantity" ADD CONSTRAINT "product_quantity_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "request"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_quantity" ADD CONSTRAINT "product_quantity_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
