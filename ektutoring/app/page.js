import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Subjects from "./components/Subjects";
import Footer from "./components/Footer";
import { MdOutlineMailOutline, MdPhone } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col bg-indigo-100">
      <div className="flex flex-row justify-end items-center w-screen h-10 bg-black px-10 space-x-10">
        <div className="flex flex-row items-center my-3 text-gray-500 hover:text-gray-400">
          <MdOutlineMailOutline className="text-2xl mx-3"/>
          <a href="mailto:ektutoring@gmail.com" className="text-sm hover:underline">ektutoring@gmail.com</a>
        </div>
        <div className="flex flex-row items-center my-3 text-gray-500 hover:text-gray-400">
          <MdPhone className="text-2xl mx-3"/>
          <a href="tel:+15877037826" className="text-sm hover:underline">587-703-7826</a>
        </div>
      </div>
      <Navbar />
      <div className="flex flex-col items-center justify-between">
        <Header />
        <div className="min-h-screen w-screen flex flex-col items-center bg-indigo-100 text-indigo-900">
          <div className="w-full h-20 bg-indigo-900 shadow-xl" ></div>
          <div className="text-indigo-900 bg-indigo-300 px-40 py-10" >
            <div className="p-10 bg-indigo-200 rounded-md flex flex-col">
              <h1 className="text-3xl font-bold mt-5 mb-1 ">Personalized Tutoring Services in NW Calgary</h1>
              <h2 className="text-xl font-bold italic mb-5">Empowering Students with Tailored Educational Support</h2>
              <p className="py-2">
              Centered in North West Calgary Communities, EKTutoring is a <b>self-run </b>business created by 
              Emily Kiddle focused on <b>helping students achieve academic success. </b>
              Emily offers personalized tutoring services that cater to the individual learning styles 
              and needs of each student.</p>
              <p className="py-2"> EKTutoring offers excellent tutoring from grades K-12 and all the way to intro
              university classes in both mathematics and scientific topics. Whether it's math, science, 
              or exam preparation, EKTutoring provides tailored support and guidance to foster confidence 
              and improve academic performance.</p>
              <p className="py-2"> Experience a dedicated, <b>one-on-one approach to education </b> 
              with EKTutoring. 
              </p>
              <Link href={"/contact"} 
              className="inline-block mt-10 mx-20 px-6 py-3 text-white bg-indigo-500 rounded hover:bg-indigo-600 transition-all 
                         hover:mx-16 duration-300 text-center">
              Contact The Tutor
              </Link>
            </div>
          </div>
          <Subjects />
        </div>
      </div>
      <Footer />
    </main>
  );
}
