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
  await prisma.address.deleteMany({});
});

afterAll(async () => {
  await prisma.address.deleteMany({});
});


describe("teste aleatorio", () => {
  it("buscar usuarios ", async () => {
    const user = await createUserFactories();
    const address = await addressFactories(user.id);
  
    const response = await server.post("/address").send(address);
    expect(response.status).toBe(200);
  });
  it("POST: buscar usuarios ", async () => {
    const user = 1111
    const address = await addressFactories(user);
  
    const response = await server.post("/address").send(address);
    expect(response.status).toBe(404);
  });
});

describe("teste address GET", () => {
  it("buscar usuarios ", async () => {
   
    const response = await server.get("/address");
    expect(response.status).toBe(200);
  });
 
});
