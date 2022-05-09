import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/Project.js";
import "./models/Task.js";

async function main() {
  try {
    await sequelize.sync({ alter: true });
    app.listen(4000);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
