const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
mongoose.connect(
    "mongodb+srv://omnistack:fKPYiYFoT3zlFjIF@omnistack-gustavoper-g0vnh.mongodb.net/semana09?retryWrites=true&w=majority",
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
);

//GET, PUT, POST, DELETE
//req.query = Acessar query params (filtros)
//req.params = Acessar route params (para edicao, delete)

//Parametro necessario para habilitar JSON
app.use(express.json());
app.use(routes);

app.listen(3333);
