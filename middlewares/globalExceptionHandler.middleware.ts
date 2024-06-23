import { Request, Response, NextFunction } from "express";
import { IResponse } from "../dtos/Reponse.dto";
import { responseType } from "../enums/response.type";

const sendErrorResponse = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorResponse: IResponse = {
    status: false,
    timestamp: Date.now(),
    correlationId:
      res.locals && res.locals.metaData && res.locals.metaData.correlationId,
    message: responseType.failure,
    data: {},
    error: { error: err.message },
  };

  res.status(500).send(errorResponse);
};

const GlobalExceptionMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // log the request
  sendErrorResponse(err, req, res, next);
};

export { GlobalExceptionMiddleware };