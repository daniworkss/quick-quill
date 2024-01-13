import { useState } from "react"
import Beatloader from "./loaders/beat-loader"
import { sendMessage } from "@/lib/apiOptions"
import Image from "next/image"
export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const[respondMessage, setrespondMessage] = useState('')
  
  const sendMessageFormData = new FormData()
  sendMessageFormData.append('Name', name)
  sendMessageFormData.append('Email', email)
  sendMessageFormData.append('Message', message)

  async function handleSubmit(e){
   e.preventDefault()
   setLoading(true)
   setrespondMessage('')
    try{
      const send = await sendMessage(sendMessageFormData)
      setLoading(false)
      setrespondMessage('Message Sent')
      console.log(send, 'it worked')
    }catch (err){
      console.log(err.message, 'it worked')
      setLoading(false)
      setrespondMessage('Message Not Sent')

      
    }
    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <div className="bg-white tablet:h-screen laptop:h-[750px] tablet:items-center tablet:flex tablet:flex-col tablet:w-full tablet:pt-[8rem] laptop:pt-[2rem] tablet:space-y-[3rem] pb-[3rem] rounded-[20px] w-[95%] p-4">
          <h2 className="text-Black text-center  text-[26px] font-semibold  tablet:text-[32px] laptop:text-[40px] tablet:text-center text-black"> Contact <strong className="text-Blue">Us</strong></h2>

     <div className="flex justify-around  items-center tablet:w-full ">
      <div className="contact-image hidden laptop:block w-[80%] h-[600px] relative laptop:-mt-8 ">
        <Image src={'/images/contact-image.png'} fill={true} objectFit={'contain'} ></Image>
      </div>

    <div className="flex flex-col w-[100%] items-center mt-[3rem]">
      <div className=" w-[80%] h-[40px] flex justify-center items-center " >
        <p className="text-Blue font-bold">{respondMessage}</p>
      </div>
    <form  onSubmit={handleSubmit} action="submit" className=" mt-[.8rem] w-full flex flex-col items-center  space-y-[1rem] laptop:w-[90%]">
            <input type="text" pattern="[A-Za-z\s]+" title="Enter a valid name (letters and spaces only)" name="name" placeholder="Name" className="outline-[0px] border-Blue border-[2px] w-[100%] p-3 rounded-[5px]" value={name} onChange={e => setName(e.target.value)}  required/>
            <input type="email"  title="Enter a valid Email Adress" name="email" placeholder="Email Address" className="outline-[0px] border-Blue border-[2px] w-[100%] p-3 rounded-[5px]" value={email} onChange={e => setEmail(e.target.value)} required/>
            <textarea type="text" className=" outline-none w-[100%] border-Blue border-[2px] resize-none h-[200px] p-3  rounded-[10px] " placeholder="Mesaage" onChange={e => setMessage(e.target.value)} value={message}  required />
            <button className="button hover:bg-Blue hover:text-white" type="submit">{loading == true ? <Beatloader/> : 'Submit'}</button>
      </form>
    </div>
     </div>
    </div>
  )
};
