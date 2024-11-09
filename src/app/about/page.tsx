
import Image from "next/image";
export default function Aboutme(){
return(
<section className="sm:flex justify-between  bg-black">
<div className=" mx-9 sm:flex justify-center">
<Image className=" sm:flex sm:mx-7  rounded-full " height={500} width={2000} src="/profile pic.png" alt="profile"/>
</div>
 <div className="my-9 mx-9 "> 
  <h1 className="sm:text-7xl sm:mx-11 my-11 text-rose-700 font-serif"><b>A</b><b className="text-white">BOUT ME:</b></h1>
 <p className="sm:text-2xl sm:mx-11 my-4 text-white">My journey in tech was significantly shaped by 
  completing a Typescript course at the Governer Initiative Artificial Intelligience Course
  (GIAIC).It was here that I also embarked on learning Cloud Applied Generative AI engineering
  with cutting-edge technologies.Additionally,I am pursing a graphic designer,I made different logos,poster,flyers,thumbnails,etc.
  I am expertise in frontend development,currently expanding my expertise by learning Next.js for both 
  backend and frontend development.Expert in making websites by using HTML,TAILWIND CSS AND JAVASCRIPT.

 </p>

</div>
</section>
)
}