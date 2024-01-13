import { useState } from "react"

export default function FAQs(){
  const [dropdown1, setDropdown1] = useState()
  const [dropdown2, setDropdown2] = useState()
  const [dropdown3, setDropdown3] = useState()
  const [dropdown4, setDropdown4] = useState()

  
  return (
    <div className=" bg-Blue  radius-box flex justify-center flex-col items-center pb-[4rem] space-y-[1.5rem] pt-[3rem]  w-full" style={{maxWidth:'1300px', margin: '0px auto'}}>
        <h2 className="text-center  text-[26px] font-semibold  tablet:text-[32px] tablet:text-center text-white">Frequently Asked <strong>Questions</strong></h2>
      <div className="questions flex-col items-center space-y-[1rem] w-full flex justify-center">
        <div className="bg-white rounded-[5px] cursor-pointer border-[1px] w-[95%] tablet:w-[70%]">
          <div className="  pb-3 flex items-center p-2 pt-4 justify-between space-x-2" onClick={()=> setDropdown1(!dropdown1)}>
           <h3 className="text-[16px]">How can <strong className="text-Blue">Quick Quill</strong> help me as a student?</h3>
           <span className="text-Blue">
           <ion-icon name={`${!dropdown1 ? 'caret-down-outline' : 'caret-up-outline'}`}></ion-icon>
           </span>
          </div>
          <div className={`answer-box bg-white   pl-3 pr-3 leading-[30px] ${!dropdown1 ?'overflow-y-hidden h-[0px] border-t-[0px] transition-height duration-[.2s] ease-in border-Blue' :' h-[200px] overflow-y-hidden flex pt-6 border-t-[2px] border-Blue transition-height duration-[.3s]'}`}>
                 <p className="text-[16px] text-black"> Quick Quill is designed with students in mind! It transforms your lecture notes into bite-sized summaries, making studying more efficient and less overwhelming.</p>
          </div>
        </div>

        {/* dropdown-2 */}
        <div className="bg-white rounded-[5px] cursor-pointer border-[1px] w-[95%] tablet:w-[70%]">
          <div className="  pb-3 flex items-center p-2 pt-4 justify-between space-x-2" onClick={()=> setDropdown2(!dropdown2)}>
           <h3 className="text-[16px]">Can I use <strong className="text-Blue">Quick Quill</strong> for various subjects</h3>
           <span className="text-Blue">
           <ion-icon name={`${!dropdown2 ? 'caret-down-outline' : 'caret-up-outline'}`}></ion-icon>
           </span>
          </div>
          <div className={`answer-box bg-white   pl-3 pr-3 leading-[30px] ${!dropdown2 ?'overflow-y-hidden h-[0px] border-t-[0px] transition-height duration-[.2s] ease-in border-Blue' :' h-[200px] overflow-y-hidden flex pt-6 border-t-[2px] border-Blue transition-height duration-[.3s]'}`}>
                 <p className="text-[16px] text-black"> Absolutely! Quick Quill adapts to your needs. Whether it's science, history, or literature, our AI understands the language of all your subjects</p>
          </div>
        </div>

        {/* dropdown-3 */}
        <div className="bg-white rounded-[5px] cursor-pointer border-[1px] w-[95%] tablet:w-[70%]">
          <div className="  pb-3 flex items-center p-2 pt-4 justify-between space-x-2" onClick={()=> setDropdown3(!dropdown3)}>
           <h3 className="text-[16px]">What file formats does <strong className="text-Blue">Quick Quill</strong> support for note uploads?</h3>
           <span className="text-Blue">
           <ion-icon name={`${!dropdown3 ? 'caret-down-outline' : 'caret-up-outline'}`}></ion-icon>
           </span>
          </div>
          <div className={`answer-box bg-white   pl-3 pr-3 leading-[30px] ${!dropdown3 ?'overflow-y-hidden h-[0px] border-t-[0px] transition-height duration-[.2s] ease-in border-Blue' :' h-[200px] overflow-y-hidden flex pt-6 border-t-[2px] border-Blue transition-height duration-[.3s]'}`}>
                 <p className="text-[16px] text-black"><strong className="text-Blue">Quick Quill</strong> supports JPG and PNG images. Simply upload your notes, and our AI will handle the rest. The limit for picture upload currently is <strong className="text-Blue"> 1mb</strong></p>
          </div>
        </div>

        {/* dropdown-4 */}
        <div className="bg-white rounded-[5px] cursor-pointer border-[1px] w-[95%] tablet:w-[70%]">
          <div className="  pb-3 flex items-center p-2 pt-4 justify-between space-x-2" onClick={()=> setDropdown4(!dropdown4)}>
           <h3 className="text-[16px]">How accurate is the <strong className="text-Blue">summarization</strong> feature?</h3>
           <span className="text-Blue">
           <ion-icon name={`${!dropdown4 ? 'caret-down-outline' : 'caret-up-outline'}`}></ion-icon>
           </span>
          </div>
          <div className={`answer-box bg-white    pl-3 pr-3 leading-[30px] ${!dropdown4 ?'overflow-y-hidden h-[0px] border-t-[0px] transition-height duration-[.2s] ease-in border-Blue' :' h-[220px] laptop:h-[200px] overflow-y-hidden flex pt-6 border-t-[2px] border-Blue transition-height duration-[.3s]'}`}>
                 <p className="text-[16px] text-black"> Our summarization feature uses advanced AI algorithms to provide accurate and concise summaries. However, perfection isn't guaranteed. We're continuously improving our algorithms based on user feedback.</p>
          </div>
        </div>
       
      </div>

    </div>
  )
};
