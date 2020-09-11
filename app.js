const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.send('Hello, world, from ExpressJS');
});

app.listen(port,() => {
  console.log(`Test app listening on https://localhost:${port}`);
});
