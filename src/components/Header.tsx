'use client'
import Link from "next/link";

import { TiThMenu } from "react-icons/ti";
import {
 Sheet,
 SheetContent,

 SheetTrigger,
} from "@/components/ui/sheet";

export default function Header(){
 return(
 <div className="flex justify-between  bg-black shadow-md sticky">
    <section>
<header className="flex  justify-between bg-black  ">
   
      <div>
   <h1 className="text-3xl lg:text-6xl mx-9 my-8   text-rose-700 font-serif"><b>DUA_HABIB</b></h1>
    </div>
     <div className="hidden md:flex ml-64 my-4">
  <Link href="/">  <button className="mx-8 sm:text-2xl my-6 text-white hover:scale-110"><b>Home</b></button></Link>
    <Link href="/about">  <button className="mx-8 sm:text-2xl my-6 text-white hover:scale-110"><b>About</b></button></Link>
   
  <Link href="/contact"><button className="sm:text-2xl mx-8 my-6 bg-rose-800 h-10 w-36  rounded-2xl  text-white hover:scale-110 hover:bg-slate-900"><b>Contactme</b></button></Link>   
     </div>
   </header>
   </section>
<Sheet>
  <SheetTrigger className="md:hidden text-3xl text-white   p-9">
  < TiThMenu />
   </SheetTrigger>
  <SheetContent  className="bg-black text-white">
  
  <div className="flex-col  flex gap-4 px-6 py-4   ">
  <Link href="/"><button className="text-xl  hover:scale-110 hover:underline-offset-1"><b>Home</b></button></Link>
<Link href="/about"><button className="text-xl    hover:scale-110  hover:underline"><b>About</b></button></Link>
<Link href="/contact"><button  className="text-xl hover:scale-110"><b>Events</b></button></Link>
</div>

  </SheetContent>
</Sheet>

</div>
 )
}

