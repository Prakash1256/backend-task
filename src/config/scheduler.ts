import { fetchMarketData } from "../services/marketDataServices";

export const startScheduler = () => {
  setInterval(async () => {
    try {
      await fetchMarketData();
    } catch (err) {
      console.error("Scheduled task failed", err);
    }
  }, 60000); // 60 seconds
};
