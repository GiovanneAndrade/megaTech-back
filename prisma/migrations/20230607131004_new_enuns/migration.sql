-- CreateEnum
CREATE TYPE "DeliveryType" AS ENUM ('STANDARD', 'EXPRESS', 'SUPER_EXPRESS');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CREDCARD', 'TICKET', 'PIX');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('IN_ANALYSIS', 'IN_TRANSIT', 'DELIVERED');

-- AlterTable
ALTER TABLE "request" ADD COLUMN     "deliveryType" "DeliveryType",
ADD COLUMN     "orderStatus" "OrderStatus",
ADD COLUMN     "payment" "PaymentMethod";
