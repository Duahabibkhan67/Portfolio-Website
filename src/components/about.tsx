'use client';

import Typewriter from "typewriter-effect";
export default function About(){
 return(
<section className="mt-11" >
<div >
 
<div className=" mt-11">
 <h1 className="text-white text-3xl mx-9 lg:mx-0 lg:text-5xl sm:my-9 sm:flex justify-center hover:text-green-700"><b>About Me: </b></h1>
 <h1 className="text-green-700 sm:text-5xl font-serif sm:mx-11 sm:flex sm:justify-center ">Crafting 
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