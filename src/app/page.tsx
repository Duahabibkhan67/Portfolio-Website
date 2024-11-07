'use client';

import About from "@/components/about";
import SKill from "@/components/skill";
import Hero from "@/components/hero";
import Project from "@/components/project";
import Service from "@/components/service";
import Contact from "@/components/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home(){
 useEffect(()=>{
  AOS.init({
   easing:"ease-out-back",
   duration:1200,
   delay:200,
   mirror:true,
   anchorPlacement:"bottom-bottom",
   offset:160,
  })
  AOS.refresh();
 } ,[]);
 return(
<main className="bg-black scroll-smooth">
<div className="bg-black">
< Hero />
<About />
< Project />
< SKill />
< Service />
< Contact />

</div>
</main>

 

 );
}