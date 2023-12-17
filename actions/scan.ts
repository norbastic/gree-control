import { scan } from "gree-lib";
import Device from "@/models/Device";

export const getDevices = async () : Promise<Device[]> => {
    const devices = await scan("192.168.1.255");
    const devList: Device[] = devices.map(dev => ({ 
        device_id: dev.cid,
        name: dev.name,
        type: dev.model,
        firmware_version: dev.ver,
        encryption_key: ""
        }) as Device
    );

    return devList;
}


