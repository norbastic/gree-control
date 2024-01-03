import { Sequelize } from "sequelize";
import * as pg from "pg";

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

if (!dbHost || !dbUser || !dbPassword || !dbName) {
    throw new Error("Database [DB_HOST], [DB_USER], [DB_PASSWORD], and/or [DB_NAME] environment variables are not set.");
}

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}:5432/${dbName}`, {dialectModule: pg});

export default sequelize;