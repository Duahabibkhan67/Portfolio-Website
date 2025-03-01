
import Image from "next/image";
export default function Aboutme(){
return(
<section className="sm:  bg-black">
<div className=" mx-9 flex justify-center bg-black">
<Image className=" sm:flex   rounded-full " height={300} width={300} src="/portfolioimg.jpg" alt="profile"/>
</div>
 <div className="my-9 mx-9 justify-center "> 
  <h1 className="text-5xl lg:text-7xl ml-2 lg:ml-96 my-11 text-green-700 font-serif"><b>A</b><b className="text-white">BOUT ME:</b></h1>
 <p className="sm:text-2xl sm:mx-11 text-white">My journey in tech was significantly shaped by 
  completing a Typescript course at the Governer Initiative Artificial Intelligience Course
  (GIAIC).It was here that I also embarked on learning Cloud Applied Generative AI engineering
  with cutting-edge technologies.Additionally,I am pursing a graphic designer,I made different logos,poster,flyers,thumbnails,etc.
  I am expertise in frontend development,currently expanding my expertise by learning Next.js for both 
  backend and frontend development.Expert in making websites by using HTML,TAILWIND CSS AND JAVASCRIPT, Node.js and Python.

 </p>
<h1 className="bg-black my-9">6ugj</h1>
</div>
</section>
)
}