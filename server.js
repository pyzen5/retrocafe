const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const apiRoutes = require("./api/routes/index");
const app = express();
app.use(bodyParser.json());

// for cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, username, password, domain, channel, locale, authorization"
  );
  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.use(express.static(__dirname + "dist/retrocafe"));
app.use("/api", apiRoutes);

app.get("/", (req, res) => res.send("Server is running!!"));

app.listen(port, () =>
  console.log(`Retrocafe app listening at http://localhost:${port}`)
);
