import path from "path";
import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.priceHistory.deleteMany();
    await prisma.productQuantity.deleteMany(); 
    await prisma.products.deleteMany();  
    await prisma.category.deleteMany();  
    await prisma.productImage.deleteMany(); 
    await prisma.favorities.deleteMany(); 
 
    const filePath = path.join(__dirname, "dados.json");
    const data = await fs.readFile(filePath, "utf8");
    const categoriesProducts = JSON.parse(data);

    for (const categoryProduct of categoriesProducts) {
      const { name, image, products } = categoryProduct;

      const createdCategory = await prisma.category.create({
        data: {
          name,
          image,
        },
      });

      for (const product of products) {
        const createdProduct = await prisma.products.create({
          data: {
            name: product.name,
            price: product.price,
            description: product.description,
            Assessments: product.Assessments,
            category: {
              connect: {
                id: createdCategory.id,
              },
            },
          },
        });
      }
    }

    console.log("Seed completed successfully.");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
