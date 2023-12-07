import * as allRepositories from "@/repositories";


async function postSearchService(term: string) {
  const result = await allRepositories.postSearchRepository(term);
  return result;
}

export { postSearchService };
