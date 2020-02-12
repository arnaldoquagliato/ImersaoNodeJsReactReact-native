const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

//Iniciando App
app = express();
//Permite o uso de arquivo json
app.use(express.json());

app.use(cors());

//Iniciando DB
mongoose.connect('mongodb+srv://admin:admin@cluster0-anazh.mongodb.net/test?retryWrites=true&w=majority', 
{   useNewUrlParser: true,
    useUnifiedTopology: true
});

requireDir('./src/models');


//Rotas
app.use('/', require("./src/routes"));

app.listen(3000);