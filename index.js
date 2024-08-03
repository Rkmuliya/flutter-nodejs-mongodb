const app = require('./app');
const db = require('./config/db');
const Usermodel = require('./model/user.model');
const todomodel = require('./model/todo.model');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!,,');
})

app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}.`);
});