import sql from "mssql";
import dotenv from "dotenv";
dotenv.config();

const dbConfig: sql.config = {
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  server: "localhost",
  database: "MarketDataDB",
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

export const connectToDB = async () => {
  try {
    const pool = await sql.connect(dbConfig);
    console.log("Connected to SQL Server");
    return pool;
  } catch (err) {
    console.error("Database connection failed", err);
    throw err;
  }
};
