/**
 * Server.js - 
 */

const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

/**
 * The connection string to mongoose
 *  you can find one for you on atlas
 */
mongoose.connect(
    "mongodb+srv://omnistack:fKPYiYFoT3zlFjIF@omnistack-gustavoper-g0vnh.mongodb.net/semana09?retryWrites=true&w=majority",
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
);

//GET, PUT, POST, DELETE
//req.query =  query params ()
//req.params = route params (edit, delete)

//set this one to enable JSONing stuff. XML is for dinossaurs and we are asteroids
app.use(express.json());
app.use(routes);
//hey, listen
app.listen(3333);
