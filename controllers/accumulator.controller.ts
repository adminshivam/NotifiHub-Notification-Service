import { NextFunction, Request, Response } from "express";
import accumulatorService from "../services/accumulator.service";

const getAccumulators = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let data: any = { jersey: "abc", jerse2y: "abc", jerfsey: "abc" };
  data = await accumulatorService.getCustomerData();
  res.locals.data = data;
  next();
};

export { getAccumulators };
