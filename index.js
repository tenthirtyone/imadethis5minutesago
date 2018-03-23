const express = require('express');
const app = express();

app.get("/", express.static(`${__dirname}`));

app.listen(4002, () => {
  console.log("Debugging copy pasta button instructions");
})