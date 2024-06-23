import express from 'express';
import dependencyRouter from './dependencies';
const app = express();
const port = 5000;

// use logger middleware

// Use the routes
app.use(dependencyRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
