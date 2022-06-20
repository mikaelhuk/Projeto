const express = require("express");
require("dotenv/config");
const routes = require('./routes');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, function() {
    console.log('👍 Projeto rodando na porta 3000');
});
