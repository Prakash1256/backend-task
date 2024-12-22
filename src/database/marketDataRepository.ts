import { MarketData } from "../models/marketData";
import { connectToDB } from "../config/db";

export const insertMarketData = async (data: MarketData[]) => {
  const pool = await connectToDB();
  const query = `
    INSERT INTO MarketData (scripCode, ltp, change, percentageChange, timeStamp)
    VALUES (@scripCode, @ltp, @change, @percentageChange, @timeStamp)
  `;
  const request = pool.request();
  data.forEach(async (item) => {
    request
      .input("scripCode", item.scripCode)
      .input("ltp", item.ltp)
      .input("change", item.change)
      .input("percentageChange", item.percentageChange)
      .input("timeStamp", item.timeStamp);
    await request.query(query);
  });
};
