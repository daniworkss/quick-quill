/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react"
import axios from "axios"
import Beatloader from "@/components/loaders/beat-loader"
import { Summary } from "@/lib/apiOptions"
import { imageScanUrl,imageScanApikey } from "@/config/Api-urls-and-keys"
import Link from "next/link"
import Image from "next/image"
import Typewriter from "../type-writer"

export default function UploadImage(){

  const [imageDisplayed, setImageDisplayed]= useState()
  const [hasNotUploadedImage, sethasNotUploadedImage] = useState(true)
  const [Loading, setLoading] = useState(false)
  
  
  //this is for image size error  and api error message to display to users either bad request or image size limit
  const [imageScanError, setImageScanError] = useState(false)
 

  //  to display Loading errors to users 
  const [noErrorMessage, setnoErrorMessage]= useState()   

  // this is to handle request error
  const [displayErrorMessage , setdisplayErrorMessage ] = useState(false)
 
  //  this is for when image has been scanned. to display 2 text areas for corrections if the image was not properly scanned
  const [imageHasBeenScanned, setimageHasBeenScanned] = useState()
  const imageInputRef = useRef()
  // image scan error
  const [imageScanErrorMessage, setImageScanErrorMessage] = useState('')

// this is to display extracted text  and summarized text to the users
 const [extractedText, setextractedText] = useState()
 const [summarizedtext, setsummarizedText] = useState('')


  // to access hidden input element with custom button using the image input reference
  const handleButtonClick= ()=>{
     imageInputRef.current.click()  
  }

// to  handle the component boolean and also to get images
   const handleImageUpload = (e) => {
        const image = e.target.files[0]
        console.log(image.size)
        if (image){
          sethasNotUploadedImage(false)
          // reset error messages for image scan 
          setImageScanError(false) 
          setImageScanErrorMessage(' ')
          setImageDisplayed(image)
        }    
    }

    //  this is to scan image for text using the api
    const scanOptions = new FormData()
    scanOptions.append('apikey', imageScanApikey)
    scanOptions.append('file', imageDisplayed)
    scanOptions.append('language', 'eng')
    scanOptions.append('OCREngine', 2)
    scanOptions.append('scale', true)
   
    async function HandleScanning(){
      setImageScanError(false)          
      setLoading(true)
        //making sure the image is 1mb. if it is not we cannot scan the image
       if (imageDisplayed.size <= 1048576){
         try {  
          // scan image 
           const response = await axios.post(imageScanUrl, scanOptions, {
             headers: {
               "Content-Type": 'multipart/form-data'
             }
           })
           setLoading(false)
           setimageHasBeenScanned(true)
           setnoErrorMessage(true)
          //  extracted text
           setextractedText(response.data.ParsedResults[0].ParsedText, 'it worked')
         } catch (error) {
           setLoading(false)
           setimageHasBeenScanned(false)
           setImageScanErrorMessage('Something went wrong please try again later')
        } 
       } else { //compress image feature will be added later 
          setLoading(false)
          setImageScanError(true)          
       } 
      
    }

    // to handle textarea Activity
    function handleTextArea (e){
      setextractedText(e.target.value)
    }

    // to summarize text
    async function HandleSummary(){  
      // to ensure that character is more than 250 to meet summary condition
      if (extractedText.length > 250 ){
          try {
            setnoErrorMessage(true)
            setdisplayErrorMessage(false)
            setsummarizedText(' ')
            setLoading(true)
            // summarize
            const summarize = await Summary.summarize({text: extractedText, format: 'paragraph', extractiveness: 'medium', temperature: 0.1, additionalCommand:"Generate a summary _" })
            setsummarizedText(summarize.summary)
            setLoading(false)
      
            
          } catch (error) {
           setdisplayErrorMessage('Something went wrong. Please try again later')
            console.log(error, 'did not work bro')
          }
      } else{
          setnoErrorMessage(false)
          setdisplayErrorMessage('Text must be 250 characters long')
      }
       
      
    }
  return (
          <div className="w-full flex justify-center" style={{maxWidth:'1300px', margin: '0px auto'}}>
          {
            hasNotUploadedImage ?( 
             <div className=" flex flex-col  items-center w-[95%] bg-white rounded h-[450px] justify-center space-y-[1rem]">
            {/* hidden input element connected to the <button></button> element to upload images */}
              <input type="file"
                accept="image/*" 
                ref={imageInputRef}
                onChange={handleImageUpload}
                id="imageupload" 
                className="hidden"
              />
            {/* this is the custom button that will be displayed to users */}
            <button href={'/summarizer/upload-Image'} className="button bg-Blue text-white  flex space-x-2 items-center cursor-pointer outline-none" onClick={handleButtonClick}> 
              <span className="mt-[3px] mr-2  ">
                <Image src={'/icons/upload-icon.svg'} alt="upload-icon" width={25} height={25} objectFit="contain"/>
              </span> 
              Upload Image
            </button>
            <div>
              <p className="text-gray-400 text-[14px] text-center">Image upload limit <strong className="">1 mb</strong></p>
              <p className="text-gray-400 text-[14px]">Supported Images <strong className="text-Blue">jpg, png , Gif</strong> </p>
            </div>
            
          </div>
            ):( !imageHasBeenScanned ?(
            <div className="flex flex-col pb-6  items-center w-[95%] bg-white rounded h-[450px] justify-center space-y-[0.5rem]">
                <div className=" h-[20px] mt-4">
                <p className={`text-[12px] text-red-500 font-semibold ${imageScanError === false ? 'hidden': 'block'}`}>Image is larger than 1 mb <a href="https://tinypng.com/" target="_blank" className="font-bold underline text-Blue">Compress here</a></p>
                <p className={`text-[12px] text-red-500 font-semibold`}>{imageScanErrorMessage}</p>
                </div>
              <div className="w-[240px] h-[280px]  flex justify-center items-center overflow-hidden">
                <img src={URL.createObjectURL(imageDisplayed)} alt="image Uploaded" className="bg-red object-fill " />    
              </div>
              <button className="button" onClick={HandleScanning}>
                {
                  Loading ? <Beatloader/> : "Scan Image"
                }
              </button>

              <button onClick={() => sethasNotUploadedImage(true)} className=" outline outline-Blue  text-Blue w-[180px] h-[50px] flex justify-center items-center text-[16px] font-semibold rounded-[5px]"> Upload Image </button>
          </div>
            ) : (
              < div className="flex w-full flex-col -mt-2 laptop:m-0  pt-[2rem] pb-[2rem] bg-white laptop:rounded-[20px] laptop:p-[2rem]">
                <div className="h-[30px] flex justify-center items-center -mt-[.5rem] laptop:mt-0 mb-[1rem] ">
                <p className={`text-center font-semibold text-[14px] pb-3 laptop:pb-8 ${displayErrorMessage ? 'text-red-500' : 'text-Blue'} `} >{ noErrorMessage ? "Check for spelling errors" : displayErrorMessage}</p>

                </div>
                <div className="flex flex-col  space-y-2 items-center w-full relative" style={{maxWidth: '1200px', margin: '0px auto'}} >
                 <div className="flex flex-col items-center laptop:flex-row w-full space-y-[3rem] laptop:space-x-[3rem] laptop:space-y-0  ">
                  <textarea  name="defaultext"  className="textarea " value={extractedText} onChange={handleTextArea}  />
                  {/* typing response */}
                 <div className="textarea-2">
                   {summarizedtext === '' ?'Summarized Text Will Be Here': <Typewriter text={summarizedtext} speed={30}></Typewriter>}
                 </div>
                 </div>
                <div className="bottom-0 w-full flex justify-center bg-white  h-[60px] laptop:mt-4 items-center">
                <button className="button hover:bg-Blue hover:text-white" onClick={HandleSummary}> {
                  Loading ? <Beatloader/> : "Summarize"
                }</button>
                </div>
              </div>
              </div>
             
            )
              
            )

            
          }
        </div>
    
  )
};
