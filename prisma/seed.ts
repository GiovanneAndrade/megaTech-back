import path from "path";
import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";
import { CategoryProduct } from "../src/types/index"

const prisma = new PrismaClient();

async function seedFile(filename:string) {
  const filePath = path.join(__dirname, "data", filename);
  const data = await fs.readFile(filePath, "utf8");
  
  const categoriesProducts: CategoryProduct[] = JSON.parse(data);

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
          Assessments: "",
          stoke: 50,
          category: {
            connect: {
              id: createdCategory.id,
            },
          },
          images: product.images ? {
            create: product.images.map((image:any) => ({ url: image })),
          } : {},
        },
      });
    }
  }
}

async function seed() {
  try {
    await prisma.productImage.deleteMany();
    await prisma.priceHistory.deleteMany();
    await prisma.productQuantity.deleteMany();
    await prisma.products.deleteMany();
    await prisma.category.deleteMany();
    await prisma.favorities.deleteMany();

    await seedFile("smartphones.json");
    await seedFile("Notebooks.json");
    await seedFile("smartwatch.json");
    await seedFile("all-inOne.json");

    console.log("Seed completed successfully.");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
