import { scan, DeviceInfo } from "gree-lib";

export const getDevices = async () : Promise<DeviceInfo[]> => {
    const devices = await scan("192.168.1.255");
    console.log(devices[0]);
    return devices;
}


