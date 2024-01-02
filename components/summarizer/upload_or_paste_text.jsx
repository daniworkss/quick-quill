import Link from "next/link"
export default function UploadOrPaste(){
  return (
    <div className="  w-full mt-[1.5rem]">
      <div className="w-full flex justify-center" style={{maxWidth:'1200px', margin: '0px auto'}}>
          <div className="flex flex-col  items-center w-[95%] bg-white rounded h-[400px] justify-center gap-[1rem]">
            <Link href={'/summarizer/upload-Image'} className="button flex items-center justify-between gap-2 cursor-pointer"> 
            <span className="mt-[3px]">
              <ion-icon name="cloud-upload"></ion-icon>
            </span> 
            Upload Image
            </Link>

            <p >Or</p>

            <Link href={'/summarizer/paste-text'} className="text-[16px] font-semibold outline-button text-VdarkBlue dark:text-white cursor-pointer">Paste Text</Link>
          </div>


        </div>
    </div>
  )
};
