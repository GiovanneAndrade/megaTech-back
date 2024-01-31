-- CreateTable
CREATE TABLE "historic" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "historic_pkey" PRIMARY KEY ("id")
);

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
ALTER TABLE "historic" ADD CONSTRAINT "historic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HistoricToProducts" ADD CONSTRAINT "_HistoricToProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "historic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HistoricToProducts" ADD CONSTRAINT "_HistoricToProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
