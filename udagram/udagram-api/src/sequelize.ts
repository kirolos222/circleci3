import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
{  username as unknown as string: config.username as unknown as string,
  password as unknown as string: config.password as unknown as string,
  database as unknown as string: config.database as unknown as string,
  host as unknown as string: config.host as unknown as string,
  port as unknown as number: config.port as unknown as number,
  dialect: "postgres",
  storage: ":memory:",}
)
console.log(config.username)