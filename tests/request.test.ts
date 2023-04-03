import supertest from "supertest";
import app from "../src/index";

import { PrismaClient } from "@prisma/client";
import { createUserFactories } from "./factories/user.factories";
import {
  addressFactories,
  createAddressFactories,
} from "./factories/address.factories";

const prisma = new PrismaClient();
const server = supertest(app);

beforeAll(async () => {
  await prisma.requests.deleteMany({});
});

afterAll(async () => {
  await prisma.requests.deleteMany({});
});


describe("teste address GET", () => {
  it("buscar usuarios ", async () => {
   
    const response = await server.get("/address/1");
    expect(response.status).toBe(200);
  });
 
});
