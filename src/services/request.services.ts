 
import { Request } from "../protocols";
import * as allRequest from "../repositories/index";

async function postRequestService( lastRequest:Request) {
 
  const result = await allRequest.postRequestRepository(lastRequest);
 
  return result
}

async function getRequestService() {
  const result = await allRequest.getRequestRepository();

  return result
}

export { postRequestService, getRequestService };
