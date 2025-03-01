'use client';
import Link from "next/link";
import Image from "next/image";
export default function Project(){
 return(
<div>

<div className="sm:mx-3 sm:my-9  ">

 <p className="text-green-700 mt-16 text-2xl lg:text-5xl sm:my-11 font-serif sm:flex justify-center"> <b>Here are some my projects</b></p>
</div>
<section className="sm:grid grid-cols-3 sm:mx-4" >
 <div data-aos="zoom-in-up" >
  <Link href="https://hamdard-website.vercel.app/">
  <Image  className="my-11  hover:scale-110"height={500} width={500} src="/hamdard.png " alt="project1" />
  </Link>
  
 
 </div>

 <div data-aos="zoom-in-up" >
  <Link href="https://edititable-resume-dua.netlify.app/">
  <Image className="my-8 mx-9 cursor-pointer hover:scale-110" height={200} width={300} src="/project 02.png" alt="project1" >
   </Image>
  </Link>
  
 
 </div>
 <div data-aos="zoom-in-up" >
  <Link href="https://tailwind-food-website-gray.vercel.app/">
  <Image className="my-11 cursor-pointer hover:scale-110" height={200} width={400} src="/food.png " alt="project1" />
  </Link>
 
 </div>
 <div data-aos="zoom-in-up" >
  <Link href="https://growth-mindset-app-duahabib.streamlit.app/">
  <Image className="my-11 mx-9 cursor-pointer hover:scale-110" height={200} width={300} src="/project4.png " alt="project1" />
  </Link>
 
 </div>
 <div data-aos="zoom-in-up" >
  <Link href="https://blog-website-three-beige.vercel.app/">
  <Image className="my-11  cursor-pointer hover:scale-110" height={200} width={400} src="/project5.png " alt="project1" />
  </Link>
  
 </div>
 <div data-aos="zoom-in-up" >
  <Link href="https://unit-converterpython-duahabib.streamlit.app/">
  <Image className="my-11  cursor-pointer hover:scale-110 mx-9" height={200} width={300} src="/project6.png " alt="project1" />
  </Link>
  
 </div>
 </section>
</div>
 )
}