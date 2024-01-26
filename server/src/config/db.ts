import { Sequelize } from "sequelize";

interface DBConig {
  name: string;
  username: string;
  password: string;
  dialect: any;
}

const db_Config: DBConig = {
  name: process.env.DB_NAME || "",
  username: process.env.DB_USERNAME || "",
  password: process.env.DB_PASSWORD || "",
  dialect: process.env.DB_DIALECT || "",
};

export const sequelize = new Sequelize(
  db_Config.name,
  db_Config.username,
  db_Config.password,
  {
    dialect: db_Config.dialect,
    logging: false,
  }
);
