import { Sequelize } from "sequelize";

const db = new Sequelize("auth_db", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
