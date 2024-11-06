'use client';
import Image from "next/image";
import Typewriter from "typewriter-effect";
export default function About(){
 return(
<section className="bg-black">
<div className="bg-black">
 <div className="my-11 flex justify-center">
<Image className="  rounded-full "  height={300} width={300} src="/profile pic.png" alt="poster"/>
</div>
<div className="">
 <h1 className="text-white text-5xl my-9 flex justify-center"><b><u>About Me:</u> </b></h1>
 <h1 className="text-rose-500 text-5xl font-serif mx-11 flex justify-center ">Crafting 
 <Typewriter
  options={{
    strings: [' My Tech and Business Journey!'],
    autoStart: true,
    loop: true,
  }}
/></h1>
 <p className="text-white text-2xl mx-11 my-11">I am an exprienced front-end developer,currently expanding my expertise by learning Next.js 
  for both backend and frontend development.My journey in tech was significantly shaped by 
  completing a Typescript course at the Governer Initiative Artificial Intelligience Course
  (GIAIC).

 </p>
</div>
</div>
</section>
 )
}