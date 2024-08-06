import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-indigo-100">
      <Navbar />
      <div className="flex flex-col items-center justify-between">
        <div className="w-screen relative h-[32rem] z-0">
          <div className="w-full h-40 absolute bg-gradient-to-b from-black to-transparent z-10" ></div>
          <Image 
            src="/work.jpg"
            fill={true}
            objectFit="cover"
            alt="Photo of computers and papers"
            className="absolute z-0"
          />
          <text 
          id="text"
            className="w-96 absolute text-white bottom-0 left-14 text-6xl z-20 transition-opacity duration-1000 ease-out transform" >
            At Home Tutoring in NW Calgary
          </text>
          <div className="absolute z-10 w-full h-60 bg-gradient-to-b from-transparent to-indigo-900 bottom-0" ></div>
        </div>
        <div className="h-screen w-screen flex flex-col items-center justify-between bg-indigo-100">
          <div className="w-full h-20 bg-indigo-900" ></div>
          Main stuff
        </div>
      </div>
    </main>
  );
}
