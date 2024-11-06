
import Link from "next/link";


 
 export  default function Header(){

 return(
  <div>
   <header className="sm:flex  justify-between bg-black">
   
    <div>
    <h1 className="text-6xl mx-8 my-4  text-rose-700 font-serif"><b>DUA_HABIB</b></h1>
    </div>
    <div className="">
   <Link href="/">  <button className="mx-8 text-2xl my-6 text-white hover:scale-110"><b>Home</b></button></Link>
   <Link href="/about">  <button className="mx-8 text-2xl my-6 text-white hover:scale-110"><b>About</b></button></Link>

<Link href="/contact"><button className="text-2xl mx-8 my-6 bg-rose-800 h-10 w-36  rounded-2xl  text-white hover:scale-110 hover:bg-slate-900"><b>Contactme</b></button></Link>

    </div>
   </header>
  </div> 
 )
}
