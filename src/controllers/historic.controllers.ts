import { Request, Response } from "express";
import * as AllServices from "../services";

async function posthistoricController(req: Request, res: Response) {
    try {
        const result = await AllServices.postHistoricService();
        return res.json(result);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

async function getHistoricController(req: Request, res: Response) {
    try {
        const result = await AllServices.getHistoricService();
        return res.json(result);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}


async function deleteHistoricController(req: Request, res: Response) {
    try {
        const result = await AllServices.deleteHistoricService();
        return res.json(result);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

export {
    posthistoricController,
    getHistoricController,
    deleteHistoricController
};