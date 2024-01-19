import { useState } from "react"
import { sendNewsLetterSubscription } from "@/lib/apiOptions"
import Beatloader from "./loaders/beat-loader"
import Slideup from "./animations/slide-up"
import Slidein from "./animations/slide-in"
import Image from "next/image"
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
    <Slideup percent={'10%'} delay={.5} className=" pb-[4rem] w-full flex flex-col items-center  ">
        <h2 className="text-center  text-[32px] font-semibold  tablet:text-[32px] laptop:text-[42px] tablet:text-center text-black">Join Our <strong className="text-Blue">Community</strong> </h2>
        <p className="text-center text-gray-600 text-[14px] ">Subscribe To Our NewsLetter</p>
       <div className=" w-[95%] mt-[1rem] laptop:mt-[2rem] laptop:flex laptop:justify-between laptop:space-x-[3rem] tablet:justify-center "> 
            <Slidein direction={'-10%'} delay={.3} className="hidden laptop:block bg-red-500 w-[80%] h-[400px]">
              <Image src={'/images/newsletter.jpg'} alt="news-letter image " fill loading="lazy"></Image>
            </Slidein >
            <Slideup percent={'10%'} className=" form-container relative tablet:w-[75%] bg-Blue h-[350px] laptop:h-[400px] rounded-[10px] mt-[.5rem] laptop:mt-0 flex items-center justify-center tablet:ml-auto tablet:mr-auto laptop:m-0">
              <form action="submit" onSubmit={handleSubscribe} className="flex justify-center  flex-col items-center w-full space-y-[1rem] laptop:space-y-[1.5rem]">
                  <input value={name} onChange={e => setName(e.target.value)} type="text" name='name' placeholder="Name" className="w-[85%] tablet:w-[70%] laptop:w-[85%] p-2  laptop:p-3 rounded-[5px]" required />
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" name='email' placeholder="Email Address" className="w-[85%]  tablet:w-[70%] laptop:w-[85%] p-2 laptop:p-3 rounded-[5px]" required />
                  <button action='submit' className={` w-[45%] tablet:w-[35%] cursor-pointer font-bold p-3 rounded-[5px] mt-4 laptop:p-3 laptop:w-[35%] ${loading === true ?'bg-Blue text-white': 'text-Blue bg-white'}`}>{ loading === true ? <Beatloader/> : 'Submit'}</button>
              </form>
                <div className={` text-[14px] ${message === 'Email is sent' ? 'bg-white text-Blue' : 'bg-white text-red-500'} w-[40%] laptop:w-[30%]  absolute top-[2rem] opacity-[90%]  flex justify-center items-center text-[14px]   font-semibold rounded-[0px] laptop:bg-white ${modal === true ? 'h-[40px] transition-all duration-[.2s] ease-in' : 'h-0 overflow-hidden transition-all duration-[.2s] ease-in '}`}>{message}</div>

            </Slideup>
       </div>
         
    </Slideup>
  )
};
