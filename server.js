const express = require("express");
const { connectionToDataBase } = require("./config/env.js");
const ENV = require("./config/env.js");

const PORT = ENV.PORT || 8000;

//Connexionto database
connectionToDataBase();

const app = express();

//middlewares so the application can understand and read json data type
app.use(express.json());

app.use("/medias", require("./routes/mediaRoute.js"));

app.use("/medias/type/:type", require("./routes/mediaRoute.js"));

app.use("/medias", require("./routes/mediaRoute.js"));

app.listen(PORT, () => {
  // this code will run the application we want theapplication to run after connecting to the DB
  console.log(`Listening at port http://localhost:${PORT}`);
});
