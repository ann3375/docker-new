const express = require("express");
const axios = require("axios");
const { port, db, apiUrl } = require("./configuration");
const { connectDb } = require("./helpers/db");

const startServer = () => {
  app.listen(port, () => {
    console.log("Server auth is running at port: " + port);
    console.log("Database: " + db);
  });
};

const app = express();

app.get("/test", (req, res) => {
  res.send("Our auth is working");
});

app.get("/testwithapidata", (req, res) => {
  axios.get(apiUrl + "/testapidata").then((data) =>
    res.json({
      testapidata: data.data,
    })
  );
});

app.get("/api/currentuser", (req, res) => {
  res.json({
    id: "1234",
    email: "test@mail.ru",
  });
});

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
