import { NextFunction, Request, Response } from "express";
import { accumulator } from "../services/accumulator.service";

const getAccumulators = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let data: any = { jersey: "abc", jerse2y: "abc", jerfsey: "abc" };
  data = await accumulator();
  res.locals.data = data;
  next();
};

export { getAccumulators };
