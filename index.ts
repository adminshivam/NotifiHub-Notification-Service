import express, { NextFunction } from "express";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { GlobalExceptionMiddleware } from "./middlewares/globalExceptionHandler.middleware";
import dependencyRouter from "./dependencies";
import { responseMiddleware } from "./middlewares/response.middleware";
const app = express();
const port = 5000;

// use logger middleware
app.use(LoggerMiddleware);

// use the dependent routes
app.use(dependencyRouter);

// use response middleware
app.use(responseMiddleware);

// use global exception middleware
app.use(GlobalExceptionMiddleware);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
