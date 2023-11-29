import { User } from "@/types";
import * as allRepositories from "@/repositories";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NotFoundError } from "@/erros/erros";

async function postSearchService(term: string) {
  const result = await allRepositories.postSearchRepository(term);
  return result;
}

export { postSearchService };
