import * as dotenv from "dotenv";
import mysql from "serverless-mysql";

dotenv.config();

if (!process.env.DATABASE_URL)
  throw new Error("DATABASE_URL env variable not set");

const db = mysql({
  onConnect: () => console.log("DB connected!"),
  config: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || "3306"),
    database: process.env.DATABASE_DB,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    ssl: { rejectUnauthorized: true },
  },
});

export async function createTable() {
  const query = `CREATE TABLE IF NOT EXISTS users (
        name                VARCHAR(100),
        email               VARCHAR(100) NOT NULL UNIQUE,
        password            VARCHAR(255) NOT NULL,
        verified            INT DEFAULT 0,
        creation_date       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modification_time   DATETIME ON UPDATE CURRENT_TIMESTAMP
    )`;
  await db.query(query);
  await db.end();
}
