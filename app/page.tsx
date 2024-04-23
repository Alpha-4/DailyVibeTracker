import {auth} from "@clerk/nextjs";
import Link from "next/link";


export default async function Home() {
  const {userId} = await auth();
  let href = userId ? `/journal` : `/new-user`;
  return (
    <div className="h-screen flex items-center justify-center bg-blue-950/90">
      <div className="h-full max-w-screen-xl py-24 px-8 text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl lg:m-4 md:m-2 m-1">
          <span className="font-semibold text-yellow-100 text-4xl md:text-6xl">DailyVibeTracker</span> - Get your vibes checked.
        </h1>
        <p className="lg:m-4 md:m-2 m-1 text-lg md:text-2xl text-white/65">Best app to keep track of your daily vibes. </p>
        <div className=" lg:m-4 md:m-2 m-1">
          <Link href={href}>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded">Get Started</button>
          </Link>
        </div>
      </div>
    </div>

  )
}
