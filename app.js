const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user.router');

const todoRouter = require('./routers/todo.router');

const app = express();
app.use(bodyParser.json());
app.use('/', userRouter);
app.use('/', todoRouter);
module.exports = app;