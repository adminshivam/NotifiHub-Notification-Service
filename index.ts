import express, { Request, Response, NextFunction } from 'express';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import dependencyRouter from './dependencies';
const app = express();
const port = 5000;

// use logger middleware
app.use(LoggerMiddleware);

// Use the routes
app.use(dependencyRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
