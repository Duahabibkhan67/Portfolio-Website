
import Image from "next/image";

export default function Aboutme(){
return(
 <main className="bg-black ">

 <h1  className="flex justify-center  text-white text-5xl font-serif  mx-11   "><b><u>CONTACT:</u></b></h1>
 <div className="flex justify-between">
  <section className="bg-slate-900 w-96 border border-accent rounded-2xl mx-11 my-11">

<div className="my-3">
   <label className="text-white mx-4 my-6 sm:h-20  font-serif" htmlFor="name">Enter your Name:
   <input className="bg-slate-950 mx-4 h-8 sm:w-60  my-5" type="text" placeholder="Full Name"   required/>
   </label>
   </div>
  <div>
   <label className="text-white mx-4 my-6 sm:h-20   font-serif " htmlFor="email">Enter your E-mail:
   <input className="bg-slate-950 mx-4 h-8 sm:w-60  my-5" type="email" placeholder="Your E-mail"  required/>
   </label>
</div>
   <div className="flex flex-col gap-1">
   <label className="text-white mx-4     font-serif " htmlFor="message"> Your Message:   </label>
   <textarea  className="bg-slate-950 text-white  mx-4 sm:w-80 " name="Message" id="msg"  rows={5}></textarea>

</div>
  <button className="  text-2xl  text-white border border-accent h-12 w-20 rounded-2xl bg-rose-700 hover:bg-lime-800 hover:scale-105 my-6  mx-11   p-2 "><b>Send</b></button> 

</section>
<p>hello</p>
<section>
   <Image className="mr-52 mt-20" height={500} width={500} src="/contactme.png" alt="contact"></Image>
</section>
</div>
 </main>
)

}