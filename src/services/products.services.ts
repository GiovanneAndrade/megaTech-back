import * as allProducts from "../repositories/index";


async function getProductsService() {
  const result = await allProducts.getProductsRepository();
  return result;
}

async function getProductsHotService() {
  const result = await allProducts.getProductsHotRepository();
  return result;
}

export { getProductsService, getProductsHotService };