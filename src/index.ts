import express from 'express';

// Initialize express
const app = express();

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Export the app for Vercel
export default app;