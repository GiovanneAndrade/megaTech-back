import supertest from "supertest";
import app from "../src/index";

import { PrismaClient } from "@prisma/client";
import { createUserFactories } from "./factories/user.factories";
import {
  addressFactories,
  createAddressFactories,
} from "./factories/address.factories";
import jwt from "jsonwebtoken";
import { createSessionFactories } from "./factories/sesssion.factories";
const prisma = new PrismaClient();
const server = supertest(app);

beforeAll(async () => {
  await prisma.productQuantity.deleteMany();
  await prisma.priceHistory.deleteMany();
  await prisma.contact.deleteMany();
  // await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.requests.deleteMany();
  await prisma.favorities.deleteMany();

  await prisma.address.deleteMany();
  await prisma.products.deleteMany();
  await prisma.category.deleteMany();
  await prisma.session.deleteMany();
});
const secretKey = process.env.SECRET_KEY;
/* afterAll(async () => {
  await prisma.productQuantity.deleteMany();
  await prisma.priceHistory.deleteMany();
  await prisma.contact.deleteMany();
  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.requests.deleteMany();
  await prisma.favorities.deleteMany();
  
  await prisma.address.deleteMany();
  await prisma.products.deleteMany();
  await prisma.category.deleteMany();
  await prisma.session.deleteMany();
  
}); */

describe("test address GET", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.get("/address");

    expect(response.status).toBe(401);
  });

  it("should respond with status 401 if given token is not valid", async () => {
    const token = "tokeninvalido";

    const response = await server
      .get("/address")
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(401);
  });

  it("buscar usuarios ", async () => {
    const secretKey = process.env.SECRET_KEY;
    const user = await createUserFactories();
    const token = jwt.sign({ id: Number(user.id) }, secretKey);
    const session = await createSessionFactories(token, user.id);
    console.log(session);
    const response = await server
      .get("/address")
      .set("Authorization", `Bearer ${session.token}`);
    expect(response.status).toBe(200);
  });
});

describe("test address Post", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.get("/address");

    expect(response.status).toBe(401);
  });

  it("should respond with status 401 if given token is not valid", async () => {
    const token = "tokeninvalido";

    const response = await server
      .get("/address")
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(401);
  });

  
});
