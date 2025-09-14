import express from "express";

const app = express();

app.use(express.json({ limit: "200kb" }));

// Простейшие эндпоинты без зависимостей
app.get("/health", (_, res) => {
    res.json({ ok: true, timestamp: new Date().toISOString() });
});


export default app