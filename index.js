const express = require('express');
const consign = require('consign');

const app = express();
const port = 3000;

consign()
    .then('./config/middlewares.js')
    .then('./src/api')
    .then('./config/routes.js')
    .into(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});