import axios from "axios"
import { useState } from "react"
import { sendNewsLetterSubscription } from "@/lib/apiOptions"
import Beatloader from "./loaders/beat-loader"
export default function Newsletter(){
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [loading, setLoading] = useState(false)
   const [message, setMessage] = useState('')
   const [modal, setModal] = useState(false)
  

   const newsLetterFormData = new FormData()
    newsLetterFormData.append('Name', name)
    newsLetterFormData.append('Email', email)

    async function handleSubscribe(e){
        e.preventDefault()
        setLoading(true)
    try {
        const sendtoapi = await sendNewsLetterSubscription(newsLetterFormData)
        setMessage('Email is sent')
        setModal(true)
        setTimeout(()=>{
          setModal(false)
         },3000)
        setName('')
        setEmail('')
        setLoading(false)
        console.log(sendtoapi)
     } catch (error) {
        setLoading(false)
        setMessage('Something went wrong')
        setModal(true)
        setTimeout(()=>{
            setModal(false)
        },3000)
        setName('')
        setEmail('')
        console.log(error, 'something went wrong')
     }

    }
  
  return (
    <div className="pb-[4rem] w-full flex flex-col items-center">
        <h2 className="text-center  text-[32px] font-semibold  tablet:text-[32px] laptop:text-[42px] tablet:text-center text-black">Join Our <strong className="text-Blue">Community</strong> </h2>
        <p className="text-center text-gray-600 text-[14px] ">Subscribe To Our NewsLetter</p>
       <div className=" w-[95%] mt-[1rem] laptop:mt-[2rem] laptop:flex laptop:justify-between laptop:space-x-[3rem]"> 
            <div className="hidden laptop:block bg-red-500 w-[80%] h-[400px]">
            
            </div>
            <div className=" form-container tablet:w-[75%] bg-Blue h-[350px] rounded-[10px] mt-[.5rem] laptop:mt-0 flex items-center justify-center">
            <form action="submit" onSubmit={handleSubscribe} className="flex justify-center flex-col items-center w-full space-y-[1rem] laptop:space-y-[1.5rem]">
                <input value={name} onChange={e => setName(e.target.value)} type="text" name='name' placeholder="Name" className="w-[85%] tablet:w-[70%] laptop:w-[90%] p-2  laptop:p-3 rounded-[5px]" required />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" name='email' placeholder="Email Address" className="w-[85%]  tablet:w-[70%] laptop:w-[90%] p-2 laptop:p-3 rounded-[5px]" required />
                <button action='submit' className={` w-[45%] tablet:w-[35%] cursor-pointer font-bold p-3 rounded-[5px] mt-4 laptop:p-3 laptop:w-[35%] ${loading === true ?'bg-Blue text-white': 'text-Blue bg-white'}`}>{ loading === true ? <Beatloader/> : 'Submit'}</button>
            </form>
            </div>
       </div>
        <div className={` ${message === 'Email is sent' ? 'bg-Blue text-Blue' : 'bg-white text-red-500'} w-[80%] h-[60px] fixed top-[0rem] opacity-[90%]  flex justify-center items-center text-[14px] tablet:text-[18px] font-semibold rounded-[5px] laptop:bg-white ${modal === true ? 'translate-y-0 transition-all duration-[.2s] ease-in' : 'translate-y-[-100%] transition-all duration-[.2s] ease-in '}`}>{message}</div>
         
    </div>
  )
};
