import * as AllRepositories from "@/repositories";

async function postHistoricService() {
    const result = await AllRepositories.postHistoricRepository();
    return result;
}

async function getHistoricService() {
    const result = await AllRepositories.getHistoricRepository();
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