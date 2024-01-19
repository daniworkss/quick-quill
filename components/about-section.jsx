import Slideup from "./animations/slide-up"
export default function Aboutsection(){
  return (
    <Slideup percent={'20%'} className=" w-full justify-center flex pb-[4rem] max-w-[1300px] ml-auto mr-auto ">
      <div className="text-container tablet:w-[80%] laptop:w-[70%] pl-[1rem] tablet:pl-0 ">
      <h2 className="font-semibold text-[32px] mb-2 tablet:text-[32px] text-center">What is Quick<strong className="text-Blue">Quill ?</strong></h2>
      <p className="text-[16px] text-left pr-[20px]  tablet:text-[18px] tablet:text-center leading-[30px]">Welcome to Quick Quill, where your notes come to life! Our mission is to simplify the way you manage and understand your notes. We understand the hustle of student life. Quick Quill is not just an app it&apos;s your study companion on the journey to academic success.</p>
      </div>
    </Slideup>
  )
};
