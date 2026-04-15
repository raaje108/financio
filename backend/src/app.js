const express = require('express');
const cors = require('cors');

const app = express();

// Upgraded CORS to allow all origins for development
app.use(cors({
    origin: true, // Allow all origins
    credentials: true
}));

app.use(express.json());

// Load Routers
const userRouter = require('./routes/user.routes');
const shopRouter = require('./routes/shop.routes');     
const ledgerRouter = require('./routes/ledger.routes'); 

// Mount Routers
app.use('/api/v1/users', userRouter); 
app.use('/api/shops', shopRouter);
app.use('/api/ledger', ledgerRouter);

module.exports = app;