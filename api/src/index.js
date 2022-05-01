const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const { port, db, authApiUrl } = require("./configuration");
const { connectDb } = require("./helpers/db");

const startServer = () => {
  app.listen(port, () => {
    console.log("Server api-service is running at port: " + port);
    console.log("Database: " + db);
  });
};

const app = express();

app.get("/test", (req, res) => {
  res.send("Our api is working");
});

app.get("/api/testapidata", (req, res) => {
  res.json({
    testWithApi: true,
  });
});

app.get("/api/bob", (req, res) => {
  res.json({
    bob: true,
  });
});

app.get("/testwithcurrentuser", (req, res) => {
  axios.get(authApiUrl + "/currentuser").then((res1) => {
    res.json({
      customElements: true,
      user: res1.data,
    });
  });
});

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
