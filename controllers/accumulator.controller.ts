import { Request, Response } from 'express';

const getAccumulators = (req: Request, res: Response) => {
  // filter the request
  // validate the request
  // call service
  // handle response and error
  res.send("HELLO ACCUMULATOR");

}

export {
  getAccumulators
}