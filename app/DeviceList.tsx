import { DeviceItem } from "./DeviceItem";
import { Device } from "@/models/Device";
import { EmptyList } from "./EmptyList";

export type DeviceListProps = {
    deviceList: Device[];
}

export const DeviceList = ({deviceList} : DeviceListProps) => {
    return(
        <ul role="list" className="divide-y divide-gray-100">
            {
                deviceList && deviceList.length > 0 ? 
                deviceList.map( device => <DeviceItem device={device} /> ) :
                <EmptyList />
            }
        </ul>
    );
}

