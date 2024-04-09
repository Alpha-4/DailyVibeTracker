import Link from "next/link";


export default function Home() {
  return (
    <div className="w-screen h-screen bg-blue-950/90 flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto space-y-2">
        <h1 className="text-6xl">
          DailyVibeTracker - Get your vibes checked.
        </h1>
        <p className="text-2xl text-white/65">Best app to keep track of your daily vibes. </p>
        <div>
          <Link href="/journal">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
          </Link>
        </div>

      </div>
    </div>
  )
}
