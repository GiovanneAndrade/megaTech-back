import * as allAddress from "../repositories/index";

async function getCategoryService() {
  const result = await allAddress.getCategoryRepository();
  return result;
}

export { getCategoryService };
