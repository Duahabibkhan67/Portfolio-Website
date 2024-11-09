'use client';
import Image from "next/image";
import Typewriter from "typewriter-effect";
export default function About(){
 return(
<section className="bg-black">
<div className="bg-black">
 <div className="sm:my-11 sm:flex  justify-center">
<Image className="  rounded-full sm:h-30 sm:w-30"  height={300} width={300} src="/profile pic.png" alt="poster"/>
</div>
<div className="">
 <h1 className="text-white sm:text-5xl sm:my-9 sm:flex justify-center"><b><u>About Me:</u> </b></h1>
 <h1 className="text-rose-500 sm:text-5xl font-serif sm:mx-11 sm:flex sm:justify-center ">Crafting 
 <Typewriter
  options={{
    strings: [' My Tech and Business Journey!'],
    autoStart: true,
    loop: true,
  }}
/></h1>
 <p className="text-white sm:text-2xl sm:mx-11 sm:my-11">I am an exprienced front-end developer,currently expanding my expertise by learning Next.js 
  for both backend and frontend development.My journey in tech was significantly shaped by 
  completing a Typescript course at the Governer Initiative Artificial Intelligience Course
  (GIAIC).

 </p>
</div>
</div>
</section>
 )
}