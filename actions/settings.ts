import { Settings } from "@/models/Settings";
import fs from "fs";

const readSettings = () : Settings => {
    const settingsPath = "settings.json";
    console.log(`Attempting to read: [${settingsPath}]`);

    try {
        const data = fs.readFileSync(settingsPath, "utf8");
        return JSON.parse(data);
    } catch(err) {
        console.error(`Error occured while reading [settings.json]: ${err} `);
        throw new Error("Cannot read settings.json");
    }    
}

const settings = readSettings();

export default settings;