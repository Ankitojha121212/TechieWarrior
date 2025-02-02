const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contact');

const app = express();
const port = process.env.PORT || 8080;

// Middleware

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
})();

// Routes
app.use('/api/contact', contactRoutes);

// Start server
app.listen(port, () => {
    console.log(`The server is listening on port: ${port}`);
});
