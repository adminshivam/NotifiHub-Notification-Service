import { responseType } from "../enums/response.type";
import { ILooseObject } from "./common.dto";

export interface IResponse {
  status: boolean;
  timestamp: number;
  correlationId: string;
  message: responseType;
  data: ILooseObject;
  error?: ILooseObject;
}
