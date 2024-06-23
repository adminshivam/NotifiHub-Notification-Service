import { Request, Response, NextFunction } from "express";

const LoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // log the request
  const start = Date.now();
  const oldJson = res.json;

  const Log = {
    request : {
      url: req.url,
      path: req.path,
      method: req.method,
      body: req.body,
      params: req.params,
      headers: req.headers,
    },
    response : {
      statusCode: 0,
      body: {},
    },
    meta: {
      requestStartTime: start,
      requestDuration: -1,
    }
  };

  res.json = function (...args: [body?: any]) {
    Log.meta.requestDuration = Date.now() - start;
    Log.response.statusCode = res.statusCode;
    Log.response.body = args[0];
    return oldJson.apply(res, args);
  };

  res.on('finish', () => {
    console.log(Log);
  });

  next();
}

export {LoggerMiddleware};