import Header2 from "@/components/header-2";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Contactus(){
  return (
      <div className="bg-white flex justify-center flex-col ml-auto mr-auto">
        <Header2 backGround={'bg-blue-500'} textColor={'text-red-500'}/>
        <div className=" pt-[2rem] laptop:pt-[1rem]">
          <div className="flex  ml-auto mr-auto justify-center mt-2 max-w-[1400px]">
            <Contact/>
          </div>
        </div>
        <Footer/>
      </div>
  )
};
