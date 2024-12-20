'use client';
import Link from "next/link";
import Image from "next/image";
export default function Project(){
 return(
<div>

<div className="sm:mx-3 sm:my-6  ">
 <h1 className="text-white sm:text-7xl my-11 font-serif sm:flex justify-center"><b><u>Projects:</u></b></h1>
 <p className="text-rose-700 sm:text-5xl sm:my-11 font-serif sm:flex justify-center"> <b>Here are some my projects</b></p>
</div>
<section className="sm:grid grid-cols-3" >
 <div data-aos="zoom-in-up" className="bg-gray-800  sm:h-25 mx-4 my-3 sm:w-30 rounded-2xl cursor-pointer hover:scale-105">
  <Image  className="my-11 "height={500} width={500} src="/e-commerce.png " alt="project1" />
  <h1 className="sm:text-2xl mx-11  my-3 font-serif text-rose-700"><b>E-Commerce Website</b></h1>
  <p className="mx-2 text-1xl text-white">In this website,I used figma design.I made this website by using Next.Js framework</p>
 <button className="text-white text-3xl h-10 w-20 flex justify-center bg-blue-700 rounded-2xl  hover:scale-105  my-3 mx-11"><Link href="https://e-commerce-website-nextjs.vercel.app/"><b>View</b></Link></button>
 </div>
 <div data-aos="zoom-in-up" className="bg-gray-800 h-25 mx-4 my-3 w-30 rounded-2xl cursor-pointer hover:scale-105">
  <Image className="my-8 mx-9" height={200} width={300} src="/project 02.png" alt="project1" />
  <h1 className="text-3xl text-rose-700 mx-11  font-serif"><b>Editable Resume</b></h1>
  <p className="mx-2 text-1xl text-white">In this website,I used core HTML,CSS and Javascript and some features.</p>
  <button className="text-white text-3xl h-10 w-20 flex justify-center bg-blue-700 rounded-2xl  hover:scale-105  my-3 mx-11"><Link href="https://edititable-resume-dua.netlify.app"><b>View</b></Link></button>
 </div>
 <div data-aos="zoom-in-up" className="bg-gray-800 h-25 mx-4 my-3 w-30 rounded-2xl cursor-pointer hover:scale-105">
  <Image className="my-11" height={200} width={400} src="/food.png " alt="project1" />
 <h1 className="text-3xl text-rose-700  mx-11 font-serif"><b>Food Website</b></h1>
  <p className="mx-2 text-1xl text-white">In this website,I used Next.js,react components and some features.</p>
  <button className="text-white text-3xl h-10 w-20 flex justify-center bg-blue-700 rounded-2xl  hover:scale-105 my-3 mx-11"><Link href="https://tailwind-food-website-dua.vercel.app/"><b>View</b></Link></button>
 </div>
 </section>
</div>
 )
}