const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req:any, res:any) => {
  res.send('Hello World!');
  console.log("Hit main");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
