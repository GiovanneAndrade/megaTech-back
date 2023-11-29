import { Request, Response } from "express";
import * as allUsers from "@/services";
import { InternalServerError, ifNotFoundError } from "@/erros/erros";


interface SearchQuery {
  term: string;
}
async function postSearchController(req: Request<{}, {}, {}, SearchQuery>, res: Response)  {
 
  const { term } = req.query;
  try {
    const result = await allUsers.postSearchService(term);
    return res.send(result);
  } catch (error) {
    return InternalServerError(res);
  }
}
 

export { postSearchController };
