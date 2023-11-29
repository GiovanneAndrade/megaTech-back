import * as allAddress from "@/repositories";

async function getCategoryService() {
  const result = await allAddress.getCategoryRepository();
  return result;
}

async function getPageCategoryService(page:any, categoryId:any) {
  
  const result = await allAddress.getPageCategoryRepository(page, categoryId);
  return result;
}
export { getCategoryService, getPageCategoryService };
