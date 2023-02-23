 
import { Request } from "../protocols";
import * as allRequest from "../repositories/index";

async function postRequestService( lastRequest:Request) {
 
  const result = await allRequest.postRequestRepository(lastRequest);
 
  return result
}



export { postRequestService };
