import { NextFunction, Request, Response } from "express";
import accumulatorService from "../services/accumulator.service";
import { ILooseObject } from "../dtos/common.dto";

const getAccumulators = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let data: Array<ILooseObject> = await accumulatorService.getCustomerData();
  res.locals.data = data;
  next();
};

export { getAccumulators };
