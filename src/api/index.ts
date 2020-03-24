import axios, { AxiosResponse } from "axios";
import { IUserResultDto } from "./dtos/user";

export default class Api {
  getUsers = (): Promise<AxiosResponse<IUserResultDto>> =>
    axios.get("https://randomuser.me/api/?results=25");
}
