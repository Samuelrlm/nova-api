const express = require('express');
const router = require('./routers/router');
const routerUsers = require('./routers/router-users');

const app = express();
app.use(express.json());

app.use(router);
app.use(routerUsers);

module.exports = app;