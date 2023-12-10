import Image from 'next/image'
import { Header } from './header'
import { useTransition } from 'react'
import { connectDb } from '@/actions/database';
 
export default function Home() {
  connectDb();
  return (
    <main>
    </main>
  )
}
