import * as allProducts from "../repositories";

async function getProductsService() {
  const result = await allProducts.getProductsRepository();
  return result;
}

async function getProductsHotService() {
  const result = await allProducts.getProductsHotRepository();
  return result;
}

async function updateStokeProductsService(productQuantity: any) {
  const consultProductId = await allProducts.consultProductsHotRepository(
    productQuantity.productId
  );
  const stoke = Number(consultProductId[0].stoke) - productQuantity.quantity;
  const result = await allProducts.updateStokeProductsRepository(
    productQuantity,
    stoke
  );
  return result; 
} 

 
export {
  getProductsService,
  getProductsHotService,
  updateStokeProductsService,
 
};
