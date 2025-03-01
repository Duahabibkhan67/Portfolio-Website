'use client';
import Image from "next/image";
import Link from "next/link";
import Typewriter from "./typewriter";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiFiverr } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
export default function Hero(){
 return(
  <section className="sm:flex justify-between  bg-black">
<div className=" mx-9  sm:flex justify-center">
<Image className="sm:mx-6 my-9 border sm:h border-accent rounded-full " height={700} width={700} src="/portfolioimg.jpg" alt="profile"/>
</div>
 <div className="sm:my-9 sm:mx-9 "> 
  <h1 className="sm:text-5xl sm:mx-3 sm:my-4 text-green-700 font-serif"><b>< Typewriter/> </b></h1>

 
 <p className="sm:text-xl sm:mx-3 sm:my-4 text-white">I am Web developer,exploring the intersection of business and technology
  through cloud applied generative AI engineering.
 </p>
 <div className="flex ">
<div>
  <Link href="https://www.linkedin.com/in/dua-habib-497557301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
<p className="text-gray-600 text-4xl hover:bg-green-800 hover:text-white hover:scale-110 border-spacing-px mt-4 px-1.5 py-2  border-2 border-green-700 rounded-full m-4"><FaLinkedinIn /></p>
</Link>
</div>
<div >
  <Link href="https://github.com/Duahabibkhan67">
  <p className="text-gray-600 text-4xl hover:bg-green-800 hover:text-white hover:scale-110 border-spacing-px mt-4  px-1.5 py-2 border-2 border-green-700 rounded-full m-4"><FiGithub/></p>
 </Link>
 </div>
 <div >
  <Link href="https://www.fiverr.com/duadeveloper2?public_mode=true">
  <p className="text-gray-600 text-4xl hover:bg-green-800 hover:text-white hover:scale-110 border-spacing-px mt-4 px-1.5 py-2  border-2 border-green-700 rounded-full m-4"><SiFiverr /></p>
 </Link>
 </div>
 <div >
  <Link href="https://www.upwork.com/freelancers/~01daf2251c79136a5f">
  <p className="text-gray-600 text-4xl hover:bg-green-800 hover:text-white hover:scale-110 border-spacing-px px-1.5 py-2  border-2 border-green-700 rounded-full m-4"><FaUpwork /></p>
 </Link>
 </div>
 <Link href="https://drive.google.com/file/d/1YZWxqnwZWPOyKus49Wr6odvFZwEuIH9t/view?usp=drive_link"><h1 className=" sm:text-2xl md:flex hidden px-1.5 py-2 font-bold mt-4 hover:bg-green-800 rounded-xl text-white hover:scale-110">DownloadCV</h1></Link>
 </div>
 </div>
</section>
 )
}