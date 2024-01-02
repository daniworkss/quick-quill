import { useState } from "react"
import Header from "@/components/header";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Summarize from "@/components/summarizer/upload_or_paste_text";
const apiKey = process.env.NEXT_PUBLIC_IMAGE_API_KEY 
const apiurl = process.env.NEXT_PUBLIC_IMAGE_API_URL

export default function Home() {   
   const router = useRouter()
   const {pathname} = router
   const activelink = 'text-white bg-Blue p-3 font-bold rounded-[5px] pl-5 pr-5'

  return (
    <>
    <Header/>
    <div className="bg-white dark:bg-black h-[60px] pt-4 flex items-center">
    <section className='user-task-selection flex w-full justify-center gap-[15px] pb-[12px]  items-center '>
        <div className='cursor-pointer '>
          <Link href={'/'} className={pathname.includes('/') ? activelink :'text-VdarkBlue p-3 font-bold bg-inherit'}>Summarize</Link>
        </div>  
        <div className='cursor-pointer'>
          <Link href={'/paraphraser'} className={pathname.includes('/paraphraser') ? activelink :'text-VdarkBlue dark:text-white p-3 font-bold'} >Paraphrase</Link>
        </div>  
    </section>
    </div>
   <Summarize/>

    </>
  )
}
