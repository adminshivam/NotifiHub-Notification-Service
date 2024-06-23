import { Request, Response, NextFunction, response } from "express";
import { uuid } from "uuidv4";
import { IResponse } from "../dtos/response.dto";
import { responseType } from "../enums/response.type";

const LoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // log the request
  console.log("inside logger Layer....");

  const correlationId = uuid();
  res.locals.metaData = {};
  res.locals.metaData.correlationId = correlationId;

  const Log = {
    request: {
      url: req.url,
      path: req.path,
      method: req.method,
      body: req.body,
      params: req.params,
      headers: req.headers,
    },
    response: {
      statusCode: 0,
      body: {},
    },
    metaData: {
      correlationId: correlationId,
    },
  };

  res.on("finish", () => {
    Log.metaData = res.locals.metaData;
    Log.response.statusCode = res.statusCode;
    Log.response.body = res.locals.data;
    console.log(uuid(), Log);
  });

  next();
};

export { LoggerMiddleware };
