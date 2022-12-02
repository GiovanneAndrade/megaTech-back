import { Request, Response } from "express";
import * as allAddress from "../repositories/address.repositories";

async function postAddressController(req: Request, res: Response) {
  const {
    cep,
    address,
    name_recipient,
    number,
    district,
    city,
    uf,
    complement,
    userId,
  }: {
    cep: number;
    address: string;
    name_recipient: string;
    number: number;
    district: string;
    city: string;
    uf: string;
    complement: string;
    userId: number;
  } = req.body;

  const result = await allAddress.postAddressRepository({
    cep,
    address,
    name_recipient,
    number,
    district,
    city,
    uf,
    complement,
    userId,
  });

  return res.send(result);
}

async function getAddressController(req: Request, res: Response) {
  const result = await allAddress.getAddressRepository();

  return res.send(result);
}
async function deleteAddressController(req: Request, res: Response) {
  const id = req.params.id;
  const result = await allAddress.deleteAddressRepository({ id });

  return res.send(result);
}
async function updateAddressController(req: Request, res: Response) {
  const { currentAddress, previousAddress } = req.params;
  console.log(req.params)
  const result = await allAddress.updateAddressRepository({
    currentAddress,
    previousAddress,
  });

  return res.send(result);
}

export {
  postAddressController,
  getAddressController,
  deleteAddressController,
  updateAddressController,
};
