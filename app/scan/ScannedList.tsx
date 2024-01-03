"use client";

import { InboxIcon } from "@heroicons/react/24/outline";
import { DocumentPlusIcon } from "@heroicons/react/20/solid";
import { DeviceInfo } from "gree-lib";

export type ScannedListProps = {
    devices: DeviceInfo[];
  }
  
const ScannedList: React.FC<ScannedListProps> = ({ devices }) => {
  const bind = (device: DeviceInfo) => {
    console.log(device);
  }

  return (
        <div className="bg-indigo-900 min-h-screen flex flex-col items-center pt-10">
        {devices.map((device, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md m-4 p-6 flex items-center w-full max-w-md justify-between">
            <div className="flex flex-col w-auto">
              <InboxIcon className="w-12 h-12 mr-4 text-fuchsia-800" />
              <div className="mr-2 text-gray-800">
                <h3 className="text-xl font-semibold">{device.name}</h3>
                <p>Brand: {device.model}</p>
                <p>MAC: {device.mac}</p>
                <p>IP Address: {device.address}</p>
                <p>Firmware: {device.ver}</p>
              </div>
            </div>
            <div>
                <button onClick={() => bind(device)}>
                  <div className="flex-col text-gray-800">
                    <DocumentPlusIcon />
                    <label>Bind</label>
                  </div>
                </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ScannedList;