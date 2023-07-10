const express = require("express");
const cors = require("cors");
const { connectionToDataBase } = require("./config/env.js");
const ENV = require("./config/env.js");

const PORT = ENV.PORT || 8000;

//Connexionto database
connectionToDataBase();

const app = express();

//middlewares so the application can understand and read json data type
app.use(express.json());
app.use(cors());

app.use(express.static("public"));
app.use("/images", express.static("images"));

//plays document (pièces)
app.use("/plays", require("./routes/playsRoute.js"));
//actors document (acteurs)
app.use("/actors", require("./routes/actorsRoute.js"));
//locations document (lieux)
app.use("/locations", require("./routes/locationsRoute.js"));
//News document (actualités)
app.use("/news", require("./routes/newsRoute.js"));

app.listen(PORT, () => {
  // this code will run the application we want theapplication to run after connecting to the DB
  console.log(`Listening at port http://localhost:${PORT}`);
});
