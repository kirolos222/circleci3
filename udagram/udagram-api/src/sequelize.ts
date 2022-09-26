import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
{  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.port as unknown as string,
  dialect: "postgres",
  storage: ":memory:",}
)
console.log(config.username)