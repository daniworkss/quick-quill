import Layout from "@/components/Layout"
import Link from "next/link"
export default function summarizer(){
  return (
    <Layout>
        <div className="w-full flex justify-center" style={{maxWidth:'1200px', margin: '0px auto'}}>
          <div className="flex flex-col  items-center w-[95%] bg-white dark:bg-darktextareabg rounded h-[400px] justify-center gap-[1rem]">
            <Link href={'/summarizer/upload-Image'} className="button flex items-center justify-between gap-2 cursor-pointer"> 
            <span className="mt-[3px]">
              <ion-icon name="cloud-upload"></ion-icon>
            </span> 
            Upload Image
            </Link>

            <p  className="dark:text-darkblue">Or</p>

            <Link href={'/summarizer/paste-text'} className="text-[16px] font-semibold outline-button text-gray-800 cursor-pointer dark:text-white">Paste Text</Link>
          </div>
        </div>
    </Layout>
  )
};
