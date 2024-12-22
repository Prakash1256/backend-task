import express from "express";
import marketDataRoutes from "./routes/marketDataRoutes";
import { errorMiddleware } from "./midllewares/errorHandler";

const app = express();
app.use(express.json());
app.use("/api/marketdata", marketDataRoutes);
app.use(errorMiddleware);

export default app;
