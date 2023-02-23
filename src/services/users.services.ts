 
import { User } from "../protocols";
import * as allUsers from "../repositories/index";
async function postUsersService( user:User) {
 
  const result = await allUsers.postUsersRepository(user);
  const userId = result.id;
  await allUsers.postFavoritiesCreateRepository(userId );
  return result
}



export { postUsersService };
