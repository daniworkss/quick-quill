import Link from "next/link"
import Slideup from "./animations/slide-up"
import Slidein from "./animations/slide-in"
export default function Features(){
  return (
    <div>
      <Slidein direction={'0%'} delay={0.5} className="radius-box  pb-[4rem] bg-Blue flex flex-col pt-[3rem] space-y-[1.5rem] laptop:flex-row laptop:h-[500px] laptop:items-center  ml-auto mr-auto">
        {/* hidden on laptop but visible on mobile */}
      <div className=" pb-[4rem]  flex flex-col pt-[3rem] space-y-[1.5rem]  laptop:flex-row laptop:h-[500px] laptop:items-center  ml-auto mr-auto max-w-[1700px]">
      <h2 className=" laptop:hidden text-[26px]  font-semibold  pl-3 tablet:text-[32px] tablet:text-center text-center text-white ">Summarize <strong className="text-white">Notes</strong></h2>
          <Slideup percent={'10%'} delay={'.6'} className="w-full justify-center flex ">
            <div  className=" w-[330px] h-[210px]  tablet:w-[80%] tablet:h-[300px] laptop:h-[350px] flex justify-center  laptop:items-center">
               {/* play video from outside source */}
               <iframe src="https://streamable.com/e/i0ebll?autoplay=1&nocontrols=1" allow="autoplay"></iframe>
            </div>
          </Slideup>
         <Slideup percent={'10%'} delay={'.8'} className="pl-3 pr-2  flex justify-center  flex-col laptop:w-[100%] laptop:p-0 laptop:space-y-[1rem] w-full">
          {/* hidden on mobile visible on laptop */}
          <h2 className="text-white hidden laptop:block text-[24px] font-semibold laptop:text-[36px] text-left ">Summarize <strong>Notes</strong></h2>
            <div className="flex justify-center ">
             <p className="text-left ml-2 text-white tablet:text-[18px] text-[16px] tablet:text-center tablet:w-[85%] laptop:w-full laptop:text-left laptop:pr-[4rem] laptop:ml-0 leading-[30px]">Quick Quill uses <strong>artificial intelligence</strong> to transforms your lengthy notes into intelligent <strong>summaries</strong>. We understand that the student journey is about more than just collecting information; it's about digesting and understanding it. Quick Quill&apos;s intelligent summarization feature condenses your notes into key points, ensuring that your study sessions are focused and effective.</p>
            </div>
            <Slideup delay={.6} className="w-full flex justify-center mt-[2rem] laptop:justify-start">
              <Link href={'/summarizer'} className="w-[160px] tablet:w-[180px] bg-white flex justify-center items-center h-[50px] rounded-[5px] font-semibold text-Blue ">Get Started</Link>
            </Slideup>
         </Slideup>
      </div>
        </Slidein>
{/* for pararphrasing */}
        <div className=" pb-[4rem] bg-inherit flex flex-col pt-[3rem] space-y-[1.5rem] laptop:flex-row-reverse laptop:h-[500px] laptop:items-center ">
        {/* hidden on laptop but visible on mobile */}
         <div className=" bg-inherit flex flex-col pt-[3rem] space-y-[1.5rem] laptop:flex-row-reverse laptop:h-[500px] laptop:items-center max-w-[1700px] ml-auto mr-auto">
            <h2 className="text-black  laptop:hidden text-[26px]  font-semibold  pl-3 tablet:text-[32px] tablet:text-center text-center">Paraphrase <strong className="text-Blue">Notes</strong></h2>
              <Slidein direction={'100%'} delay={0.5} className="w-full justify-center flex ">
              <div  className=" w-[330px] h-[210px] tablet:h-[300px] overflow-hidden tablet:w-[80%]   laptop:h-[350px] flex justify-center  laptop:items-center">
                <iframe src="https://streamable.com/e/ramvjl?autoplay=1&nocontrols=1" allow="autoplay" ></iframe>
               </div>
              </Slidein>
            <Slideup delay={.5} percent={'10%'} className="pl-3 pr-2  flex justify-center  flex-col laptop:w-[100%] laptop:p-0 laptop:space-y-[1rem] laptop:pl-[4rem]">
              {/* hidden on mobile visible on laptop */}
              <h2 className="text-Black hidden laptop:block text-[24px] font-semibold laptop:text-[36px]  ">Paraphrase <strong className="text-Blue">Notes</strong></h2>
              <div className="w-full flex justify-center">
                <p className="text-left ml-2 text-black text-[16px] tablet:text-[18px] tablet:text-center tablet:w-[85%] laptop:w-full laptop:text-left laptop:pr-[1.5rem] laptop:ml-0 leading-[30px] ">Paraphrasing means rewriting something in your own words while keeping the same meaning. It&apos;s like retelling information using different words to show you understand it. Instead of copying exactly what someone else said, you express the ideas in a new way. Paraphrasing is useful in writing to share information in your own style without copying directly from the original source. It&apos;s a way of using your own words to talk about someone else&apos;s ideas. This is very useful especially when writing a project to help you avoid <strong className="text-Blue">plagiarism</strong></p>
              </div>
                <Slideup delay={.6} className="w-full flex justify-center mt-[2rem] laptop:justify-start">
                  <Link href={'/paraphraser'} className="w-[160px] tablet:w-[180px] bg-Blue flex justify-center items-center h-[50px] rounded-[5px] font-semibold text-white ">Get Started</Link>
                </Slideup>
            </Slideup>
         </div>
        </div>
    </div>
  )
};
