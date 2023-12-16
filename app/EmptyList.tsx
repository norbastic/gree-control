import Link from "next/link";

export const EmptyList = () => {
    return(
        <div className="bg-indigo-700 py-24 sm:py-32 rounded-md">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-white">
                No device found. Do you want to scan?
                </h2>
                <div className="flex flex-col mt-5 items-center">
                    <div className="outline w-14 h-8 outline-2 outline-offset-2 bg-zinc-700 rounded-sm text-center">
                        <Link href="/scan">Scan</Link>
                    </div>
                </div>                
            </div>
        </div>          

    );
}