import express from "express";

const app = express();

app.use(express.json({ limit: "200kb" }));

// Простейшие эндпоинты без зависимостей


//
export default app