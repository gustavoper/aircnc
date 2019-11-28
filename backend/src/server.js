/**
 * Server.js - 
 */

require('dotenv/config');

const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors');
const app = express();

/**
 * The connection string to mongoose
 *  you can find one for you on atlas
 */
mongoose.connect(
    process.env.DB_CONNSTRING,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
);

//GET, PUT, POST, DELETE
//req.query =  query params ()
//req.params = route params (edit, delete)

//set this one to enable JSONing stuff. XML is for dinossaurs and we are asteroids

app.use(cors());
app.use(express.json());
app.use(routes);
//hey, listen
app.listen(3333);
