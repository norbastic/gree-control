import { connectDb, migrateDataBase } from "@/actions/database";
import { DeviceList } from "@/app/DeviceList";
import { Device } from "@/models/Device";

export default function Home() {
  connectDb();
  migrateDataBase();

  const devices: Device[] = [];

  return (
    <main className="bg-indigo-900 h-screen w-full">
      <DeviceList deviceList={devices} />
    </main>
  )
}
