-- AlterTable
ALTER TABLE "address" ADD COLUMN     "testeId" INTEGER;

-- CreateTable
CREATE TABLE "Pessoa" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_testeId_fkey" FOREIGN KEY ("testeId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
