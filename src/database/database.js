import Sequelize from "sequelize";

export const sequelize = new Sequelize("nodejs_db", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
});
