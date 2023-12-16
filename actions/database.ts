"use server";

import sequelize from "@/models/sequelizeInstance";

export const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database: ", error);
    }
};

export const migrateDataBase = async () => {
    try {
        await sequelize.sync();
        console.log("All models were synchronized successfully.");
      } catch (error) {
        console.error("An error occurred while synchronizing models: ", error);
    }
}