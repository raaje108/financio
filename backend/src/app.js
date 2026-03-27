const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*', 
    credentials: true
}));
app.use(express.json());

const userRouter = require('./routes/user.routes');

app.use('/api/v1/users', userRouter); 

module.exports = app;