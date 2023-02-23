import { Favorities } from "../protocols";
import * as allFavorities from "../repositories/index";

async function postFavoritiesService(favorities: Favorities) {
  const result = await allFavorities.postFavoritiesRepository(favorities);
  return result;
}



export {  postFavoritiesService };
