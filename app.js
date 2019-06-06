const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const mainRoutes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "pug");
app.use("/static", express.static("public"));
app.use(mainRoutes);

app.listen(3000, () => {
  console.log("The server is running on local host: 3000!");
});
