import { connectDb, migrateDataBase } from "@/actions/database";
 
export default function Home() {
  connectDb();
  migrateDataBase();

  return (
    <main>
    </main>
  )
}
