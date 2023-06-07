import { NotFoundError } from "../erros/erros";
import { Favorities } from "../types";
import * as allFavorities from "../repositories";
import { consultUserService } from "./consultUser.services";

async function postFavoritiesService(favorities: Favorities, userId: number) {
  console.log(favorities.userId, userId)
  if (favorities.userId !== userId) {
    throw new NotFoundError("não autorizado");
  }

  await consultUserService(favorities.userId);
  const { id } = favorities.productId[0];
  const consultProductId = await allFavorities.consultProductsHotRepository(id);

  if (consultProductId.length === 0) {
    throw new NotFoundError("produto não existe");
  }

  const result = await allFavorities.postFavoritiesRepository(favorities);
  const consultFavorites = await allFavorities.consultProductsHotRepository(id);
  return consultFavorites;
}

async function postRemoveFavoritiesService(favorities: Favorities, userId: number) {
   
  if (favorities.userId !== userId) {
    throw new NotFoundError("não autorizado");
  }
  
  await consultUserService(favorities.userId);
  const { id } = favorities.productId[0];

  const consultProductId = await allFavorities.consultProductsHotRepository(id);
  if (consultProductId.length === 0)
    throw new NotFoundError("produto não existe");

  const result = await allFavorities.removeFavoritiesRepository(favorities);
  const consultFavorites = await allFavorities.getFavoritiesRepository(
    favorities.userId
  );
  return consultFavorites;
}

async function getFavoritiesService(userId: number) {
  await consultUserService(userId)

  const result = await allFavorities.getFavoritiesRepository(userId);
  return result;
}

export { getFavoritiesService, postFavoritiesService };
