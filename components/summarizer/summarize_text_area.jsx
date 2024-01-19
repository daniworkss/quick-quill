import { useState } from "react"
import {Summary} from "@/lib/apiOptions"
import Beatloader from "../loaders/beat-loader"
import Typewriter from "../type-writer"
export default function SummarizeTextArea(){
    const [isDisabled, setisDisabled] = useState(true)
    const [defaultText, setDefaultText] = useState('')
    const [summarizedText, setSummarizedText] = useState('')
    const [Loading, setLoading] = useState(false)
    const [errorMessage, setErrormessage] = useState('')
    
    async function summarizeText(){
      if (defaultText.length >= 250){
        try { 
          setErrormessage('') 
          setSummarizedText('') 
          setLoading(true)
          // summarize
          const summarize = await Summary.summarize({text: defaultText, format: 'paragraph', extractiveness: 'medium', temperature: 0.3, additionalCommand:"Generate a summary _" })
          setSummarizedText(summarize.summary)
          setisDisabled(false)
          setLoading(false)
         } catch (error) {
          setErrormessage('Something went wrong please try again later')
         }
      } else{
        setErrormessage('Text must be 250 characters long')
      }
    }

  return (
     <div className="flex flex-col bg-white pb-[2rem] laptop:p-[2rem]  space-y-[1rem] items-center w-full " style={{maxWidth: '1200px', margin: '0px auto'}} >
     <div className="h-[20px] mt-4 mb-2 laptop:-mt-[10px] laptop:mb-[10px]">
     <p className=" text-[14px] font-semibold text-red-600">{errorMessage}</p>
     </div>
     <div className="flex flex-col items-center laptop:flex-row w-full space-y-[2rem] laptop:space-y-0 laptop:space-x-[3rem]">
     <textarea  name="defaultext"  className="textarea " value={defaultText} placeholder="Paste text here" onChange={e => setDefaultText(e.target.value)}  />
      <div className="textarea-2">
        {summarizedText === '' ? 'Summarized Text Will Be Here' : <Typewriter text={summarizedText} speed={30}></Typewriter>}
      </div>
     </div>
    <div className="bottom-0 w-full flex justify-center bg-white  h-[60px] laptop:mt-4 items-center">
    <button className="button" onClick={summarizeText}> {
      Loading === true ? <Beatloader/> : "Summarize"
    }</button>
    </div>
  </div>
  )
};
