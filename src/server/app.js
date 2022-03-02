const express = require('express');
const path = require('path');
const app = express();
// const compression = require("compression");
// const livereload = require("livereload").createServer();
// const logger = require("morgan");





// app.use(logger("dev"));
// app.use(compression());
app.use(express.static(path.resolve("dist/some-app")))

app.get('*', (req, res) => {
  res.sendFile(path.resolve("dist/some-app"))
}) 

// livereload.watch("dist/some-app");
app.listen(3100, () => {
  console.log('Server has been started on poet 3100...')
})