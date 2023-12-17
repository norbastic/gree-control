import Device from "@/models/Device";
import { InboxIcon } from "@heroicons/react/24/outline";

export type ScannedListProps = {
    devices: Device[];
  }
  
const ScannedList: React.FC<ScannedListProps> = ({ devices }) => {
    return (
        <div className="bg-indigo-900 min-h-screen flex flex-col items-center pt-10">
        {devices.map((device, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md m-4 p-6 flex items-center w-full max-w-md">
            <InboxIcon className="w-12 h-12 mr-4 text-fuchsia-800" />
            <div className="text-gray-800">
              <h3 className="text-xl font-semibold">{device.name}</h3>
              <p>Type: {device.type}</p>
              <p>Firmware: {device.firmware_version}</p>
            </div>
            <div>
                <button>Bind</button> { /* TODO */}
            </div>
          </div>
        ))}
      </div>

    );
  };
  
  export default ScannedList;