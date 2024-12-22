import { Router } from "express";
import { getMarketData } from "../controllers/marketDataController";

const router = Router();

router.get("/fetch", getMarketData);

export default router;
