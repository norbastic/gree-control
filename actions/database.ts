"use server";

export const connectDb = () => {
    const dbHost = process.env.DB_HOST;
    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD;

    if (!dbHost || !dbUser || !dbPassword) {
        throw Error("Database [HOST] and/or [USER] and/or [PASSWORD] is/are empty.");
    }
}