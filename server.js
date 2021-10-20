// TODO: REQUIRE NECESSARY DEPENDANCIES
const express = require("express");
const fs = require("fs");
const path = require('path');


// TODO: INITIALIZE EXPRESS & PORT
const app = express();
const PORT = process.env.PORT || 3000;

// TODO: SETUP MIDDLEWARE FOR PARSING JSON & URLENCODED DATA
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// TODO: CONSULT TUTOR TO ELABORATE FURTHER ON __dirname
app.use(express.static(__dirname));

// TODO: PLACING THIS REQUIRE HERE TO PREVENT COMMAND LINE ERROR OF "CANNOT USE APP BEFORE INITIALIZATION"
require('./routes/routes')(app);

// TODO: SETUP LISTENER
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);