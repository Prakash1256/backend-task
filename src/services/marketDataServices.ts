import axios from "axios";
import { API_CONFIG } from "../config/apiConfig";
import { logger } from "../utils/logger";
import { insertMarketData } from "../database/marketDataRepository";
import { MarketData } from "../models/marketData";

export const fetchMarketData = async () => {
  try {
    const response = await axios.get(`${API_CONFIG.BASE_URL}/MarketFeed`, {
      headers: {
        "x-api-key": API_CONFIG.API_KEY,
      }
    });
    const marketData: MarketData[] = response.data.map((item: any) => ({
      scripCode: item.scripCode,
      ltp: item.ltp,
      change: item.change,
      percentageChange: item.percentageChange,
      timeStamp: new Date(),
    }));
    await insertMarketData(marketData);
    logger.info("Market data inserted successfully");
  } catch (err) {
    logger.error("Error fetching market data", err);
    throw err;
  }
};
