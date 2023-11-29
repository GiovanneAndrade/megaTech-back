import { NotFoundError } from "@/erros/erros";

import * as allUser from "@/repositories";

async function consultUserService(userId: number) {
  const user = await allUser.consultUser(Number(userId));
  if (!user) throw new NotFoundError("usuario não existe");

  return user;
}

export { consultUserService };
