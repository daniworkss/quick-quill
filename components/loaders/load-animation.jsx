import { BarLoader } from "react-spinners"
import { disablePageScroll, enablePageScroll } from "scroll-lock"
import { useEffect, useState } from "react"
export default function Loadanimation(){
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
      // Show the logo after 2 seconds
      disablePageScroll()
      const showTimer = setTimeout(() => {
        setShowLogo(true);
      }, 2000);
      // Clear the timers 
      return () => {
        clearTimeout(showTimer);
         enablePageScroll()
      };
    }, []);
  return (
    <div className="bg-white h-screen w-full flex  pt-[19rem] tablet:pt-0 tablet:justify-center flex-col items-center  space-y-[1rem]">
        <div className={` overflow-x-hidden flex justify-center relative`}>
          <h1 className="text-[32px] tablet:text-[36px]  laptop:text-[42px] font-extrabold ">Quick<strong className="text-Blue">Quill</strong></h1>
          <div className={`absolute z-10 bg-white h-[300px] top-0  ${showLogo === true ? 'w-0 transition-all duration-[.3s] ease-out': 'w-full transition-all duration-[.3s] ease-out'}`}></div>
          
        </div>
        <BarLoader color="#6366F1" width={80} />
    </div>
  )
};
