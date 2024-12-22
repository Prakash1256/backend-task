import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = "https://api.iiflsecurities.com";
const API_KEY = process.env.IIFL_API_KEY;

export async function fetchMarketData(scrips: string[]): Promise<any> {
  try {
    const response = await axios.post(`${BASE_URL}/MarketFeed`, {
      headers: { "X-API-KEY": API_KEY },
      data: { scrips },
    });
    return response.data;
  } catch (error) {
    throw new Error(`API Error: ${(error as Error).message}`);
  }
}
