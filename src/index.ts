import express from 'express';

const app = express();

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

module.exports = app;