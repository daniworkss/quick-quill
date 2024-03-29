import { useEffect, useState } from "react"
import {Summary} from "@/lib/apiOptions"
import Beatloader from "../loaders/beat-loader"
import Typewriter from "../type-writer"
export default function ParaphraseTextArea(){
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
           // to work with typewriter
           setparaphrasedText(`${paraphrase.summary}`)
           setLoading(false)
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
     <div className="flex flex-col bg-white pb-[2rem] laptop:p-[2rem]  space-y-2 items-center w-full " style={{maxWidth: '1200px', margin: '0px auto'}} >
     <div className="h-[20px] mt-4 mb-2 laptop:-mt-[10px] laptop:mb-[10px]">
     <p className=" text-[14px] font-semibold text-red-600">{message}</p>
     </div>
     <div className="flex flex-col items-center laptop:flex-row w-full space-y-[2rem] laptop:space-y-0 laptop:space-x-[3rem]">
     <textarea  name="defaultext"  className="textarea " value={defaultText} onChange={e => setDefaultText(e.target.value)} placeholder="Paste text here" />
       {/* for typeWriter-response */}
      <div className="textarea-2">
        {paraphrasedText === '' ? 'Paraphrased text will be here': <Typewriter text={paraphrasedText} speed={30}></Typewriter>}
      </div>
     
     </div>
    <div className="bottom-0 w-full flex justify-center  bg-white  h-[60px] laptop:mt-4 items-center">
    <button className="button mt-5" onClick={paraphraseText}> {
      loading === true ? <Beatloader/> : "Paraphase"
    }</button>
    </div>
  </div>
  )
};
