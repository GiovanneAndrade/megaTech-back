import * as allAddress from "../repositories";

async function getCategoryService() {
  const result = await allAddress.getCategoryRepository();
  return result;
}

export { getCategoryService };
