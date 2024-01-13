import Header2 from "@/components/header-2";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Contactus(){
  return (
      <div className="bg-white">
        <Header2/>
        <div className=" pt-[2rem]">
          <div className="flex justify-center mt-2">
            <Contact/>
          </div>
        </div>
        <Footer/>
      </div>
  )
};
