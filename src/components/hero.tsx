'use client';
import Image from "next/image";
import Link from "next/link";
import Typewriter from "./typewriter";


export default function Hero(){
 return(
  <section className="sm:flex justify-between  bg-black">
<div className=" mx-9  sm:flex justify-center">
<Image className="sm:mx-6 border sm:h border-accent rounded-full " height={500} width={2000} src="/profile pic.png" alt="profile"/>
</div>
 <div className="sm:my-9 sm:mx-9 "> 
  <h1 className="sm:text-7xl sm:mx-3 sm:my-4 text-rose-700 font-serif"><b>< Typewriter/> </b></h1>

 
 <p className="sm:text-3xl sm:mx-3 sm:my-4 text-white">I am Web developer and First Year Student,exploring the intersection of business and technology
  through cloud applied generative AI engineering.My journey is about mastering the latest
  AI tools to enhance web development and drive business innovation.
 </p>
 <div className="flex ">
<div>
  <Link href="https://www.linkedin.com/in/dua-habib-497557301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
 <Image className= "bg-blue-800 hover:bg-blue-900 cursor-pointer hover:scale-110 rounded-full mx-2 my-3" height={50} width={50} src="/linkedin.png" alt="logo1" />
</Link>
</div>
<div >
  <Link href="https://github.com/Duahabibkhan67">
 <Image className="cursor-pointer bg-white hover:scale-110 rounded-full mx-2 my-3" height={50} width={50} src="/github logo.png" alt="logo2" />
 </Link>
 </div>
 <div >
  <Link href="https://www.fiverr.com/duadeveloper2?public_mode=true">
 <Image className="cursor-pointer  hover:scale-110 rounded-full mx-2 my-3" height={70} width={70} src="/fiverr logo.png" alt="logo3" />
 </Link>
 </div>
 </div>
 </div>
</section>
 )
}