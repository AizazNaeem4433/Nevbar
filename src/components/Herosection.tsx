/* eslint-disable*/
import Link from "next/link"
import { Button } from "./ui/moving-border";


function Herosection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto">
        
        <div className="p-5 relative z-10 w-full text-center "> 
       <h1 className=" mt-30 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"> 
            Hello, i'm Aizaz</h1>
            <h1 className="mt-40 md:mt-0 text-4xl md:text-6x1 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"> 
            
            Next.js Developer</h1>

           <p className="mt-4 font-normal text-base md:text-lg
           text-neutral-300 max-w-lg mx-auto">
           Welcome to the digital realm of Aizaz - where innovative software engineering meets 
           cutting-edge web development. As a seasoned Full Stack Developer and Next.js expert, 
           I bring your ideas to life with precision, creativity, and a touch of generative AI magic. 
           Let's build something extraordinary together!
          
           </p>
           <div className="mt-10"> <Link href="/assets/cv.pdf" download="cv.pdf"> 
           <Button
           borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-salte-800"
           > Download CV</Button>
           </Link>
           </div>
        </div>
        </div>
  )
}

export default Herosection