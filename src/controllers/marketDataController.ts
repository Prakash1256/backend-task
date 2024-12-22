import { Request, Response } from "express";
import { fetchMarketData } from "../services/marketDataServices";

export const getMarketData = async (req: Request, res: Response) => {
  try {
    await fetchMarketData();
    res.status(200).send("Market data fetched and stored successfully");
  } catch (err) {
    res.status(500).send("Error fetching market data");
  }
};
