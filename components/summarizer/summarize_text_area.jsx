import { useState } from "react"
import {Summary} from "@/lib/apiOptions"
import Beatloader from "../loaders/beat-loader"
export default function SummarizeTextArea(){
    const [isDisabled, setisDisabled] = useState(true)
    const [defaultText, setDefaultText] = useState()
    const [summarizedText, setSummarizedText] = useState()
    const [Loading, setLoading] = useState(false)
    const [errorMessage, setErrormessage] = useState('')
    
    async function summarizeText(){
      if (defaultText.length >= 250){
        try { 
          setErrormessage('')  
          setLoading(true)
          const summarize = await Summary.summarize({text: defaultText, format: 'paragraph', extractiveness: 'medium', temperature: 0.3, additionalCommand:"Generate a summary _" })
          console.log(summarize.summary)
          setSummarizedText(summarize.summary)
          setisDisabled(false)
         } catch (error) {
          console.log(error, 'it did not work my guy')
          setErrormessage('Something went wrong please try again later')
         }
      } else{
        setErrormessage('Text must be 250 characters long')
      }
    }

  return (
     <div className="flex flex-col bg-white laptop:p-[2rem]  gap-2 items-center w-full relative" style={{maxWidth: '1200px', margin: '0px auto'}} >
     <div className="h-[20px] mt-4 mb-2 laptop:-mt-[10px] laptop:mb-[10px]">
     <p className=" text-[14px] font-semibold text-red-600">{errorMessage}</p>
     </div>
     <div className="flex flex-col items-center laptop:flex-row w-full gap-[3rem]">
     <textarea  name="defaultext"  className="textarea " value={defaultText} onChange={e => setDefaultText(e.target.value)}  />
      <textarea name="summarizedtext" className="textarea-2"  value={summarizedText} placeholder="Summarized Text Will Be Here" disabled={isDisabled} ></textarea>
     </div>
    <div className="bottom-0 w-full flex justify-center bg-white  h-[60px] laptop:mt-4 items-center">
    <button className="button" onClick={summarizeText}> {
      Loading === true ? <Beatloader/> : "Summarize"
    }</button>
    </div>
  </div>
  )
};
