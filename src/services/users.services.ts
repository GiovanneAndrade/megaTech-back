import { User } from "../types";
import * as allUsers from "../repositories";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NotFoundError } from "../erros/erros";
 
 
async function postUsersService(user: User) {
  const result = await allUsers.postUsersRepository(user);
  const userId = result.id;
  await allUsers.postFavoritiesCreateRepository(userId);
  return result;
}

const secretKey = process.env.SECRET_KEY;
async function postSigninService(email: string, password: string) {
  const user = await allUsers.getUserRepository(email);
  if (!user) throw new NotFoundError("Usurario não Cadastrado");
  if (!bcrypt.compareSync(password, user.password)) {
    throw new NotFoundError("Senha incorreta.");
  }  
  const token = jwt.sign({ id: Number(user.id) }, secretKey);
  const session = await allUsers.getSessionsRepository(token, user.id);
  let result = {
    id: user.id,
    name: user.name,
    email: user.email,
    token: token,
  };
  return result;
  
}

export { postUsersService, postSigninService };
