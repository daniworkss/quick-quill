import { useState } from "react"
import Beatloader from "./loaders/beat-loader"
import { sendMessage } from "@/lib/apiOptions"
import Image from "next/image"
import Slideup from "./animations/slide-up"

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const[respondMessage, setrespondMessage] = useState('')
  const [modal, setModal] = useState(false)
  const sendMessageFormData = new FormData()
  sendMessageFormData.append('Name', name)
  sendMessageFormData.append('Email', email)
  sendMessageFormData.append('Message', message)

  async function handleSubmit(e){
   e.preventDefault()
   setLoading(true)
   setrespondMessage('')
    try{
      await sendMessage(sendMessageFormData)
      setLoading(false)
      setrespondMessage('Message Sent')
      setModal(true)
      setTimeout(()=>{
        setModal(false)
      }, 3000)
    }catch (err){
      setLoading(false)
      setrespondMessage('Message Not Sent') 
    }
    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <div className="  tablet:flex tablet:flex-col tablet:w-full tablet:pt-[0rem] laptop:pt-[0rem] tablet:space-y-[0rem] pb-[3rem] rounded-[0px] w-[95%]  laptop:p-4 laptop:pb-[4rem] laptop:pr-[2rem]">
          <div className="laptop:mb-[3rem]">
          <h2 className="text-Black text-center  text-[32px] font-semibold  tablet:text-[32px] laptop:text-[42px] tablet:text-center text-black"> Contact <strong className="text-Blue">Us</strong></h2>
          <p className="text-center text-[14px]">Let us know what you think of our services</p>
          </div>
     <div className="flex justify-around  items-center tablet:w-full ">
      <Slideup percent={'10%'}  className="contact-image hidden laptop:block w-[70%] h-[600px] relative laptop:-mt-8 ">
        <Image src={'/images/contact-image.png'} fill={true} objectFit={'contain'} loading="lazy" ></Image>
      </Slideup>

    <div className="flex bg-Blue rounded-[10px] flex-col pb-[3rem] w-[100%] tablet:w-[90%]  pt-[1rem] items-center mt-[3rem] laptop:mt-[3rem] laptop:w-[70%]">
      <div className="w-full h-[40px] flex justify-center">
      <div className={` w-[45%] bg-white ${modal === true ?'h-[40px] transition-all duration-[.3s]': 'h-[0px] overflow-hidden transition-all duration-[.3s]' } flex justify-center items-center `} >
        <p className="text-Blue font-bold text-[14px]">{respondMessage}</p>
      </div>
      </div>
     <form onSubmit={handleSubmit} action="submit" className=" mt-[.8rem] w-[90%] tablet:w-[80%] flex flex-col items-center  space-y-[1rem] laptop:w-[90%] ">
            <input type="text" pattern="[A-Za-z\s]+" title="Enter a valid name (letters and spaces only)" name="name" placeholder="Name" className="outline-[0px] border-Blue border-[2px] w-[100%] p-3 rounded-[5px]" value={name} onChange={e => setName(e.target.value)}  required/>
            <input type="email"  title="Enter a valid Email Adress" name="email" placeholder="Email Address" className="outline-[0px] border-Blue border-[2px] w-[100%] p-3 rounded-[5px]" value={email} onChange={e => setEmail(e.target.value)} required/>
            <textarea type="text" className=" outline-none w-[100%] border-Blue border-[2px] resize-none h-[200px] p-3  rounded-[10px] " placeholder="Mesaage" onChange={e => setMessage(e.target.value)} value={message}  required />
            <button className="w-[180px] h-[50px] border-[2px] border-white text-white rounded-[5px] text-[16px] font-semibold" type="submit">{loading == true ? <Beatloader/> : 'Submit'}</button>
      </form>
    </div>
     </div>
    </div>
  )
};
