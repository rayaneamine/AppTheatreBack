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

//plays document
app.use("/plays", require("./routes/playsRoute.js"));
app.use("/plays/name/:name", require("./routes/playsRoute.js"));
app.use("/plays/theatre/:theatre", require("./routes/playsRoute.js"));
app.use("/plays", require("./routes/playsRoute.js"));

//actors document
app.use("/actors", require("./routes/actorsRoute.js"));
app.use("/actors/name/:name", require("./routes/actorsRoute.js"));
app.use("/actors", require("./routes/actorsRoute.js"));

//locations document
app.use("/locations", require("./routes/locationsRoute.js"));
app.use("/locations/name/:name", require("./routes/locationsRoute.js"));
app.use("/locations", require("./routes/locationsRoute.js"));

app.listen(PORT, () => {
  // this code will run the application we want theapplication to run after connecting to the DB
  console.log(`Listening at port http://localhost:${PORT}`);
});
