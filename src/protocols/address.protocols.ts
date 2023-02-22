export type ApplicationError = {
  name: string;
  message: string;
};
export type Andress = {
  cep: number;
  address: string;
  name_recipient: string;
  number: number;
  district: string;
  city: string;
  uf: string;
  complement:string | any;
  userId: number;
};
