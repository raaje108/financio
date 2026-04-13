const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500', // <-- Explicitly match your frontend URL
    credentials: true
}));

app.use(express.json());

// 1. Your existing User routes
const userRouter = require('./routes/user.routes');
app.use('/api/v1/users', userRouter); 

// 2. Add your new Shop and Ledger routes here!
const shopRouter = require('./routes/shop.routes');     // Adjust path if needed
const ledgerRouter = require('./routes/ledger.routes'); // Adjust path if needed

app.use('/api/shops', shopRouter);
app.use('/api/ledger', ledgerRouter);

module.exports = app;