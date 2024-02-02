import { NotFoundError } from "@/erros/erros";
import * as AllRepositories from "@/repositories";

async function postHistoricService(userId:number,productId:number) {
    const consult = await AllRepositories.consultProductsHotRepository(productId);
    if (!consult){
        throw new NotFoundError("Produto não cadastrado");
    }
    const result = await AllRepositories.postHistoricRepository(userId, productId);
    return result;
}

async function getHistoricService(userId:number) {
    const result = await AllRepositories.getHistoricRepository(userId);
    if (!result){
        throw new NotFoundError("sem dados");
    }
    return result;
}

 

async function deleteHistoricService() {
    const result = await AllRepositories.deleteHistoricRepository();
    return result;
}

export {
    postHistoricService,
    getHistoricService,
    deleteHistoricService
};