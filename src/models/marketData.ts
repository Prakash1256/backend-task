export interface MarketData {
    scripCode: string;
    ltp: number; // Last Traded Price
    change: number;
    percentageChange: number;
    timeStamp: Date;
  }
  