'use client'
import Link from "next/link";
import React from "react";
import { TiThMenu } from "react-icons/ti";
import {
 Sheet,
 SheetContent,

 SheetTrigger,
} from "@/components/ui/sheet";

export default function Header(){
 return(
 <div className="flex justify-between  shadow-md sticky">
    <section>
<header className="flex  justify-between   ">
   
      <div>
  <Link href="/"><h1 className="text-3xl lg:text-5xl mx-9 my-8    text-green-700"><b>DUA_HABIB</b></h1></Link> 
    </div>
     <div className="hidden md:flex ml-64 my-4">
  <Link href="/">  <button className="mx-8 sm:text-2xl my-6 text-white hover:underline transition-colors hover:text-green-700 hover:scale-110"><b>Home</b></button></Link>
    <Link href="/about">  <button className="mx-8 sm:text-2xl my-6 text-white hover:scale-110 hover:underline transition-colors hover:text-green-700"><b>About</b></button></Link>
    <Link href="/contact">  <button className="mx-8 sm:text-2xl my-6 text-white hover:scale-110 hover:underline transition-colors hover:text-green-700"><b>Contact me</b></button></Link>
  <Link href="https://drive.google.com/file/d/1YZWxqnwZWPOyKus49Wr6odvFZwEuIH9t/view?usp=drive_link"><h1 className=" sm:text-2xl px-1.5 py-2 mt-4 hover:bg-green-900 font-bold bg-green-800 rounded-xl text-white hover:scale-110">DownloadCV</h1></Link>

     </div>
   </header>
   </section>
<Sheet>
  <SheetTrigger className="md:hidden text-3xl text-white   p-9">
  < TiThMenu />
   </SheetTrigger>
  <SheetContent  className="bg-black text-white">
  
  <div className="flex-col  flex gap-4 px-6 py-4   ">
  <Link href="/">  <button className="mx-8 sm:text-2xl my-6 text-white hover:underline transition-colors hover:text-blue-800 hover:scale-110"><b>Home</b></button></Link>
    <Link href="/about">  <button className="mx-8 sm:text-2xl my-6 text-white hover:scale-110 hover:underline transition-colors hover:text-blue-800"><b>About</b></button></Link>
    <Link href="/contact">  <button className="mx-8 sm:text-2xl my-6 text-white hover:scale-110 hover:underline transition-colors hover:text-blue-800"><b>Contact me</b></button></Link>
</div>

  </SheetContent>
</Sheet>

</div>
 )
}

