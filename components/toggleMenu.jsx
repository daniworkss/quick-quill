{/* for toggling between paraphrasing or summarizing */}
import Link from "next/link"
import { useRouter } from "next/router"

export default function ToggleMenu(){
 const router = useRouter()
 const {pathname} = router
 const activelink = 'text-white bg-Blue p-3 font-bold rounded-[5px] pl-5 pr-5'
  return (
    <div className="bg-white dark:bg-black h-[60px] pt-3 flex items-center mb-[1.5rem]">
    <section className='user-task-selection flex w-full justify-center gap-[15px] pb-[12px]  items-center '>
        <div className='cursor-pointer '>
          <Link href={'/summarizer'} className={pathname.includes('/summarizer') ? activelink :'text-VdarkBlue p-3 font-bold bg-inherit'}>Summarize</Link>
        </div>  
        <div className='cursor-pointer'>
          <Link href={'/paraphraser'} className={pathname.includes('/paraphraser') ? activelink :'text-VdarkBlue dark:text-white p-3 font-bold'} >Paraphrase</Link>
        </div>  
   </section>
    </div>
  )
};
