const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
// const routesCod = require("./routes/cod");
const app = express();
const bcrypt = require("bcrypt");
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


// Define middleware here
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// app.use(routesCod);

// import routes
 
// const codRoute = require('./routes/cod');
// app.use('/cod', codRoute);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/codauth",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => console.log('connected to db')
// );

mongoose.connect(process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to db')
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
