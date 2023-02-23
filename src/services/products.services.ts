import * as allProducts from "../repositories/index";




async function getProductsHotService() {
  const result = await allProducts.getProductsHotRepository();
  return result;
}

export {  getProductsHotService };