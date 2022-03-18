import axios from "axios";
import { userType } from "../types/types";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "718bf453-524a-48b2-8e84-c21eb40e723c",
  },
});

export const LocalApiInstance = axios.create({
  baseURL: "http://localhost:8000/",
});

export enum ResultCodes {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCapctha {
  CaptchaIsRequired = 10,
}

export type GetItemsType = {
  items: Array<userType>;
  totalCount: number;
  error: null | string;
};

export type APIResponseType<D = {}, RC = ResultCodes> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};
