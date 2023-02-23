import { Favorities } from "../protocols";
import * as allFavorities from "../repositories/index";

async function postFavoritiesService(favorities: Favorities) {
  const result = await allFavorities.postFavoritiesRepository(favorities);
  return result;
}

async function getFavoritiesService() {
  const result = await allFavorities.getFavoritiesRepository();
  return result;
}

export { getFavoritiesService, postFavoritiesService };
