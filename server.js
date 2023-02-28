const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`========== express 서버시작 ==========\nlistening on port ${port}`)
});