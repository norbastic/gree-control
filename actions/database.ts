"use server";

import Device from "@/models/Device";
import sequelize from "@/models/SequelizeInstance";
import { BindResponse } from "gree-lib";

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

export const addDeviceToDB = async () : Promise<boolean> => {
    return true;
}