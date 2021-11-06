const express = require("express");
const app = express();
const port = 3000;

let count = 0;

app.use(express.json());

app.get("/", (req, res) => {
  count++;
  res.send({ count });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
