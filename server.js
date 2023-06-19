const express = require("express");
const { connectionToDataBase } = require("./config/env.js");
const ENV = require("./config/env.js");

const PORT = ENV.PORT || 8000;

//Connexionto database
connectionToDataBase();

const app = express();

//middlewares so the application can understand and read json data type
app.use(express.json());

//first document
app.use("/medias", require("./routes/mediaRoute.js"));
app.use("/medias/type/:type", require("./routes/mediaRoute.js"));
app.use("/medias", require("./routes/mediaRoute.js"));
//DOCUMENT VISITES
app.use("/visites", require("./routes/visitesRoute.js"));
app.use("/visites/type/:type", require("./routes/visitesRoute.js"));
app.use("/visites", require("./routes/visitesRoute.js"));
//DOCUMENT INTERVIEWS
app.use("/interviews", require("./routes/interviewsRoute.js"));
app.use("/interviews/type/:type", require("./routes/interviewsRoute.js"));
app.use("/interviews", require("./routes/interviewsRoute.js"));
//DOCUMENT ACUALITES
app.use("/actualites", require("./routes/actualitesRoute.js"));
app.use("/actualites/type/:type", require("./routes/actualitesRoute.js"));
app.use("/actualites", require("./routes/actualitesRoute.js"));
//DOCUMENT PROGRAMMATIONS
app.use("/programmations", require("./routes/programmationsRoute.js"));
app.use(
  "/programmations/type/:type",
  require("./routes/programmationsRoute.js")
);
app.use("/programmations", require("./routes/programmationsRoute.js"));

app.listen(PORT, () => {
  // this code will run the application we want theapplication to run after connecting to the DB
  console.log(`Listening at port http://localhost:${PORT}`);
});
