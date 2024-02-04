import Image from "next/image"
import Link from "next/link"
import Slidein from "./animations/slide-in"
import Slideup from "./animations/slide-up"

export default function HeroSection(){
  return (
    <div className=" radius-box-2 hero-section laptop:flex laptop:pl-6 laptop:pr-6 laptop:pt-[2rem] laptop:justify-center max-w-[1700px] ml-auto mr-auto" >
    <Slideup delay={0.4} direction='20%' className="hero-text w-full h-[600px] pl-2 pr-2  flex items-center flex-col justify-center laptop:items-start laptop:w-auto laptop:pr-0 laptop:pl-[2.55rem] laptop:pt-4 ">
      <h1 className="text-[32px] tablet:text-[36px] desktop:text-[82px] text-white  laptop:text-black font-extrabold text-center laptop:text-start laptop:text-[70px] laptop:leading-[70px] desktop:leading-[80px]">UNLOCK THE <span className="laptop:text-Blue">POWER</span> OF YOUR <span className="">NOTES</span></h1>
      <h2 className="text-white laptop:mt-2 font-semibold text-[16px] laptop:text-[18px] desktop:text-[24px] laptop:text-black ">Study Smart Not Hard</h2>
      <Slideup delay={1} className="w-full flex justify-center mt-[1rem] laptop:justify-start">
              <Link href={'/summarizer'} className="w-[160px] tablet:w-[180px] bg-white text-Blue laptop:text-white laptop:bg-Blue flex justify-center items-center h-[50px] rounded-[5px] font-semibold desktop:text-[18px] ">Try It Yourself</Link>
      </Slideup>
    </Slideup>
    <Slidein direction='10%' className="hero-image  w-full h-[550px] hidden laptop:flex justify-center pt-[0rem] ">
      <div className="w-[100%] desktop:w-[70%] h-[550px] relative  desktop:-mr-[8rem] ">
      <Image src={'/images/hero-image-1.png'}
         fill={true}
         objectFit={'contain'}
         loading="lazy"
         alt="hero-image"
      />
      </div>
    </Slidein>
  </div>
  )
};
