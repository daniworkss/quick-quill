import HeroSection from "@/components/hero-section";
import Header1 from "@/components/header-1";
import Aboutsection from "@/components/about-section";
import Features from "@/components/features";
import FAQs from "@/components/faqs";
import Newsletter from "@/components/newsletter";
import Link from "next/link";
import Loadanimation from "@/components/loaders/load-animation";
import { useEffect, useState } from "react";
export default function Home() {  
  // for homepage animation
  const [loading, setLoading] = useState(false) 
  useEffect(()=>{
       const timer = setTimeout(()=>{
        setLoading(true)
       }, 5000)

       return ()=>{
        clearTimeout(timer)
       }
  })
  return (
    <div className="w-full bg-white flex justify-center">
      {/* display loading animation before main page */}
      { 
        !loading 
        ?
         (<Loadanimation/>)
        :
        <div className="container max-w-[1300px]">
        <Header1/>
        <HeroSection/>
        <section id='about'className="pt-[4rem] laptop:pb-[4rem] ">
          <Aboutsection/>
        </section>
        <section id="features">
            <Features/>
        </section>
        <section id="faq">
          <FAQs/>
        </section>
        <div className="mt-[4rem] laptop:mt-[5rem]">
         <Newsletter/>
        </div>
          {/* homepage-footer */}
        <div className="mt-[3rem]">
            <div className="bg-Blue  pl-4   radius-box-3 pb-[2rem] laptop:pb-[3rem] pt-[3rem]  laptop:pt-[4rem] space-y-[2rem] laptop:space-y-0 laptop:flex justify-around laptop:pl-[5rem] laptop:pr-[5rem] laptop:items-center">
              <h1 className="logo text-white text-[36px] tablet:text-[36px] laptop:text-center laptop:text-[42px]">Quick<strong className=''>Quill</strong></h1>     
              <div className="flex flex-col laptop:flex-row w-full justify-center laptop:space-x-[4rem] space-y-[2rem] laptop:space-y-0 ">
              <div> 
                <h2 className="text-white font-bold text-[20px] mb-2">Company</h2>
                  <ul className="flex flex-col text-white pl-0 text-[16px] laptop:text-[18px] space-y-[1rem] text-left">
                  <Link href={'/'} >Home</Link>
                  <Link href={''} > About </Link>
                  <Link href={''}  className=''>Features</Link>
                  <Link href={''}  className=''>FAQ's</Link>
                  </ul>
              </div>

              <div>
                  <h2 className="text-white font-bold text-[20px] mb-2">Terms & Policies</h2>
                  <ul className="flex flex-col text-white pl-0 text-[16px] laptop:text-[18px] space-y-[1rem] text-left">
                  <Link href={'/'} >Terms</Link>
                  <Link href={''} > Policies</Link>
                  </ul>
              </div>
            </div>

              <div>
                <div className=' flex laptop:w-[200px] w-full  mt-[2rem]'>
                <Link href={''}  className='w-[150px] laptop:w-[200px] bg-white text-Blue p-3 rounded-[5px] text-center font-semibold laptop:hover:bg-Blue laptop:hover:text-white laptop:transition-colors laptop:duration-[.2s] laptop:hover:border-white laptop:hover:border-[1px]'>Contact Us</Link>
              </div> 
              </div>

            </div>
              <div className="pt-2 pb-2">
                <p className="text-center font-semibold text-[14px]">@2024 Designed and Developed by <a href="https://www.instagram.com/dani_workss/" className="underline text-Blue">Daniel</a></p>
              </div>
        </div>
        
      </div>

      }

    </div>
  )
}
