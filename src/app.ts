import express from "express";
import helmet from "helmet";


export const app = express();

// Middleware
app.use(helmet());
app.use(express.json({ limit: "200kb" }));


// Error handling middleware
app.use((err: any, _req: any, res: any, _next: any) => {
    console.error("Express error:", err);
    res.status(500).json({ ok: false, error: err?.message ?? "Internal error" });
});

// Routes
app.get("/health", (_, res) => res.json({ ok: true }));



export default app;