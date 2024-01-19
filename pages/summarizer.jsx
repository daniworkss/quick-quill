import Layout from "@/components/Layout"
import Link from "next/link"
import Image from "next/image"
export default function summarizer(){
  return (
    <Layout >
        <div className="w-full flex justify-center" style={{maxWidth:'1200px', margin: '0px auto'}}>
          <div className="flex flex-col  items-center w-[95%] bg-white rounded h-[400px] justify-center space-y-[1rem]">
            <Link href={'/summarizer/upload-Image'} className="button flex items-center justify-between gap-2 cursor-pointer"> 
            <span className="mt-[3px] mr-2 ">
              <Image src={'/icons/upload-icon.svg'} alt="upload-icon" width={25} height={25} objectFit="contain"/>
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
