import express from "express";

const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Only start server in local development
if (process.env.NODE_ENV !== "production" && process.env.VERCEL !== "1") {
    const port = 3000;
    app.listen(port, () => {
        console.log("Email server listening on", port);
    });
}

export default app;