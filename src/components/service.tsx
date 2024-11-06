import Image from "next/image";
export default function Service(){
 return(
<main>
 <h1 className="flex justify-center"><p className="text-rose-700 font-serif text-7xl"><b>S</b></p><b className= "font-serif text-white text-7xl">ervices</b></h1>
<section className="sm:grid grid-cols-3 mx-6 my-11">
 <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="mx-4  hover:scale-105">
  <Image className="bg-blue-600 my-2 rounded-full m-20" height={100} width={100} src="/web logo.png" alt="weblogo"></Image>
 <h1 className="text-4xl my-2 text-white"><b>Web Development</b></h1>
 <p className="text-1.5xl text-white ">Expert web Development service to bring your ideas to life.From conceptualization to deployment,
  I craft robust,scalable,and secure web applications that meet your business needs.
  With proficiency in modern technologies and frameworks,I deliver high-quality solutions that drive results.
 </p>
 </div>
 <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="mx-4 hover:scale-105">
  <Image className="bg-orange-600 my-2  rounded-full m-20" height={100} width={100} src="/designlogo.png" alt="designlogo"></Image>
 <h1 className="text-4xl my-2 text-white"><b>Web Design</b></h1>
 <p className="text-1.5xl text-white mx-2 ">Creative web designing solutions to captivate
 your audience.I design visually stunning, user-friendly,and engaging websites that reflect
 your brand indentity.With a focus on aesthetics and functionality,I create ebsites that leave 
 a lasting impression and drive business growth.

 </p>
 </div>
 <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="mx-4 hover:scale-105" >
  <Image className="bg-green-700 my-2  m-20 rounded-full" height={100} width={100} src="/responsivelogo.png" alt="responsivelogo"></Image>
 <h1 className="text-4xl my-2 text-white"><b>Responsive Web Design</b></h1>
 <p className="text-1.5xl text-white  mx-2">Responsive web design services to ensure seamless user exprience
 across devices.I craft mobile-friendly,tablet-friendly,and desktop-friendly websites that adapt to any screen size,ensuring
 optimal viewing and interaction.With responsive design,your website will be accessible and engaging for all users.

 </p>
 </div>
</section>
</main>
 )
}