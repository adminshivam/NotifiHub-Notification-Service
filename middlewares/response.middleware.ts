import { Request, Response, NextFunction } from "express";
import { IResponse } from "../dtos/Reponse.dto";
import { responseType } from "../enums/response.type";

const sendSuccessResponse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const successResponse: IResponse = {
    status: true,
    timestamp: Date.now(),
    correlationId: res.locals && res.locals.metaData && res.locals.metaData.correlationId,
    message: responseType.success,
    data: res.locals.data,
  };

  res.status(200).send(successResponse);
};

export const responseMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.locals.data) {
    // res.send(res.locals.data);
    sendSuccessResponse(req, res, next);
  } else {
    next();
  }
};
