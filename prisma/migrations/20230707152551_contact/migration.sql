-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "requestId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "request"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
