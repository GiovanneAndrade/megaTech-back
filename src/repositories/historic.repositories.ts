import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function postHistoricRepository(userId: number, productsId: number) {
    const result = await prisma.historic.create({
        data: {
            userId: Number(userId),
            productsId: Number(productsId),
        },
    });
    return result;
}

async function getHistoricRepository(
    userId: number,
    orderBy: "asc" | "desc" = "desc"
) {
    const result = await prisma.historic.findMany({
        where: {
            userId: Number(userId),
        },
        select: {
            products: {
              select: {
                id: true,
                name: true,
                images: true,
                category: true,
                price: true,
                description: true,
                Assessments: true,
                stoke: true,
                PriceHistory: true,
                ProductQuantity: true,
              },
            },
          },
        orderBy: {
            created_at: orderBy,
        },
    });
    return result;
}

async function deleteHistoricRepository() {
    // Lógica para excluir registros do banco de dados
}

export {
    postHistoricRepository,
    getHistoricRepository,
    deleteHistoricRepository,
};
