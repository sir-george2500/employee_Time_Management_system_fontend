import TimeInBox from '@/components/TimeInBox'
import Image from 'next/image'
import Link from 'next/navigation'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TimeInBox />
    </main>
  )
}
