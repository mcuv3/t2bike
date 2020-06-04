const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.set("view engine", "ejs");
app.set("views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.json());

app.get("/contact", (req, res, next) => {
  res.render("contact");
});
app.get("/services", (req, res, next) => {
  res.render("services");
});
app.get("/about", (req, res, next) => {
  res.render("about");
});
app.get("/noticias", (req, res, next) => {
  axios
    .get(
      "http://newsapi.org/v2/top-headlines?country=mx&category=sports&apiKey=6074c9db49ca485dbf04f252b0502b15"
    )
    .then((result) => {
      res.render("noticias", {
        noticias: result.data.articles,
      });
    });
});
app.get("/", (req, res, next) => {
  res.render("indexPage");
});

app.listen(3001);
