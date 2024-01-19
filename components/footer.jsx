import Link from "next/link"
export default function Footer(){
  return (
    <div className="radius-box-3 bg-Blue w-full flex justify-center flex-col items-center">
    <div className="bg-Blue  pl-4  w-full  radius-box-3 pb-[2rem] laptop:pb-[3rem] pt-[3rem]  laptop:pt-[4rem] space-y-[2rem] laptop:space-y-0 laptop:flex justify-around laptop:pl-[5rem] laptop:pr-[5rem] laptop:items-center max-w-[1300px]">
    <h1 className="logo text-white text-[36px] tablet:text-[36px] laptop:text-center laptop:text-[42px]">Quick<strong className=''>Quill</strong></h1>     
    <div className="flex gap-[2rem]">
              <div> 
                <h2 className="text-white font-bold text-[20px] mb-2">Company</h2>
                  <ul className="flex flex-col text-white pl-0 text-[16px] laptop:text-[18px] space-y-[1rem] text-left">
                  <Link href={'/'} >Home</Link>
                  <Link href={'#about'} > About </Link>
                  <Link href={'#feature'}  className=''>Features</Link>
                  <Link href={'#faq'}  className=''>FAQ's</Link>
                  </ul>
              </div>

              <div>
                  <h2 className="text-white font-bold text-[20px] mb-2">Terms & Policies</h2>
                  <ul className="flex flex-col text-white pl-0 text-[16px] laptop:text-[18px] space-y-[1rem] text-left">
                  <Link href={'/'} >Terms</Link>
                  <Link href={'/'} > Policies</Link>
                  </ul>
              </div>
            </div>

    <div>
      <div className=' flex laptop:w-[200px] w-full  mt-[2rem]'>
      <Link href={'/contact-us'}  className='w-[150px] laptop:w-[200px] bg-white text-Blue p-3 rounded-[5px] text-center font-semibold laptop:hover:bg-Blue laptop:hover:text-white laptop:transition-colors laptop:duration-[.2s] laptop:hover:border-white laptop:hover:border-[1px]'>Contact Us</Link>
    </div> 
    </div>
  </div> 
  <div className="pt-2 pb-2 bg-white w-full">
      <p className="text-center font-semibold text-[14px]">@2024 Designed and Developed by <a href="https://www.instagram.com/dani_workss/" className="underline text-Blue">Daniel</a></p>
    </div>
    
    </div>
  )
};

