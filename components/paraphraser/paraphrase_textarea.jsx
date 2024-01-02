import { useState } from "react"
import {Summary} from "@/lib/apiOptions"
import Beatloader from "../loaders/beat-loader"

export default function ParaphraseTextArea(){
    const [isDisabled, setisDisabled] = useState(true)
    const [defaultText, setDefaultText] = useState('')
    const [paraphrasedText, setparaphrasedText] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function paraphraseText(){
      if (defaultText.length >= 250){
        setLoading(true)
        try {
          setMessage('')
          setparaphrasedText('')
          const paraphrase = await Summary.summarize({text: defaultText, format: 'paragraph', extractiveness: 'high', temperature: 1, additionalCommand:"Generate a summary _" })
          console.log(paraphrase.summary)
          setparaphrasedText(paraphrase.summary)
          setLoading(false)
          setisDisabled(false)
         } catch (error) {
          setLoading(false)
          setMessage('Something went wrong')
         }
      } else if(defaultText.length === 0){
         setMessage('Paste text')
      } else{
        setMessage('Text must be 250 characters or more')
      }
    }

  return (
     <div className="flex flex-col bg-white laptop:p-[2rem]  gap-2 items-center w-full relative" style={{maxWidth: '1200px', margin: '0px auto'}} >
     <div className="h-[20px] mt-4 mb-2 laptop:-mt-[10px] laptop:mb-[10px]">
     <p className=" text-[14px] font-semibold text-red-600">{message}</p>
     </div>
     <div className="flex flex-col items-center laptop:flex-row w-full gap-[3rem]">
     <textarea  name="defaultext"  className="textarea " value={defaultText} onChange={e => setDefaultText(e.target.value)} placeholder="Paste text here" />
      <textarea name="summarizedtext" className="textarea-2"  value={paraphrasedText} placeholder="Paraphrased Text Will Be Here" disabled={isDisabled} ></textarea>
     </div>
    <div className="bottom-0 w-full flex justify-center bg-white  h-[60px] laptop:mt-4 items-center">
    <button className="button" onClick={paraphraseText}> {
      loading === true ? <Beatloader/> : "Paraphase"
    }</button>
    </div>
  </div>
  )
};
