import { NotFoundError } from "../erros/erros";
import { Favorities } from "../protocols";
import * as allFavorities from "../repositories/index";
import { consultUserService } from "./consultUser.services";

async function postFavoritiesService(favorities: Favorities) {
  await consultUserService(favorities.userId)
  const { id } = favorities.productId[0];
  const consultProductId = await allFavorities.consultProductsHotRepository(id);
  if (consultProductId.length === 0) throw new NotFoundError("produto não existe");

  const result = await allFavorities.postFavoritiesRepository(favorities);
  return result;
}

async function getFavoritiesService(userId: number) {
  await consultUserService(userId)

  const result = await allFavorities.getFavoritiesRepository(userId);
  return result;
}

export { getFavoritiesService, postFavoritiesService };
