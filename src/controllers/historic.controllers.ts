import { Request, Response } from "express";
import * as AllServices from "../services";
import { InternalServerError, ifNotFoundError } from "@/erros/erros";

async function posthistoricController(req: Request, res: Response) {
    const userId = req.user.userId;
    const productsId = Number(req.params.productsId);
    try {
        const result = await AllServices.postHistoricService(userId, productsId);
        return res.json(result);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

async function getHistoricController(req: Request, res: Response) {
    const userId = req.user.userId;
    try {
        const result = await AllServices.getHistoricService(userId);
        const { products } = result[0];
        return res.send(products);
    } catch (error) {
        if (error.statusCode === 404) return ifNotFoundError(res, error);

        return InternalServerError(res);
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