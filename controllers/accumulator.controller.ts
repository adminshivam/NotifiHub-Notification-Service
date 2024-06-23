import { NextFunction, Request, Response } from 'express';

const getAccumulators = (req: Request, res: Response, next: NextFunction) => {
  // filter the request
  // validate the request
  // call service
  // handle response and error
  const data = {"jersey": "abc", "jerse2y": "abc", "jerfsey": "abc"};
  res.json(data);
  next();
}

export {
  getAccumulators
}