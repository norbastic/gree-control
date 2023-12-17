import { getDevices } from "@/actions/scan";
import ScannedList from "./ScannedList";

const ScanPage = async () => {
    const devices = await getDevices();

    return(
        <main className="bg-indigo-900 h-screen w-full">
            {
                devices ?
                <ScannedList devices={devices} /> :
                <h1>Loading</h1>
            }
     
        </main>
    );
}

export default ScanPage;