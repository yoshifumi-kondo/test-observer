import Image from "next/image"
import { Inter } from "next/font/google"
import { ObserverComponent } from "@/component/ObserverComponent"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="h-[1200px]">long component</div>
      <ObserverComponent />
    </main>
  )
}
