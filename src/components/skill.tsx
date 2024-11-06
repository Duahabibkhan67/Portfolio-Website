import Image from "next/image"
export default function SKill(){
 return(
  <div>
   <h1 className="text-6xl text-rose-700 font-serif flex justify-center my-11 "><b>Skills:</b></h1>
   <p className="text-4xl text-white flex justify-center font-serif my-5 "><u>Here are my Skills:</u></p>
   <section className="sm:grid grid-cols-3">
    <div >
    <Image  className="mx-11 my-9 hover:scale-110" height={150}  width={150} src="/html logo.png" alt="html" />
    </div>
    <div  >
    <Image className="mx-11 my-9 hover:scale-110 " height={150}  width={150} src="/css logo.png" alt="css" />
   
   
    </div>
    <div >
    <Image className="mx-11 my-2 hover:scale-110"  height={200}  width={200} src="/javalogo.png" alt="java" />
    </div>
    <div >
    <Image className="mx-3 my-9 hover:scale-110"  height={250}  width={250} src="/nextjs logo.png" alt="next" />
    </div>
    <div  >
    <Image className="mx-11 my-11 hover:scale-110"  height={150}  width={150} src="/nodejs logo.png" alt="node" />
    </div>
    <div >
    <Image className="mx-11 my-9 hover:scale-110" height={200}  width={200} src="/react logo.png" alt="react" />
    </div>
   </section>
  </div>
 )
}