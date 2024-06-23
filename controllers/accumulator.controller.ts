import { NextFunction, Request, Response } from "express";

const getAccumulators = (req: Request, res: Response, next: NextFunction) => {
  const data = { jersey: "abc", jerse2y: "abc", jerfsey: "abc" };
  const status = 200;
  // throw new Error("Fuck error");

  res.locals.data = data;
  next();
};

export { getAccumulators };
