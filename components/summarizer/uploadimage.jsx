/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react"
import axios from "axios"
import Beatloader from "@/components/loaders/beat-loader"
import { Summary } from "@/lib/apiOptions"
import { compressionUrl} from "@/lib/compression"
import https from 'https'

const apiUrl = process.env.NEXT_PUBLIC_IMAGE_API_URL
const apikey = process.env.NEXT_PUBLIC_IMAGE_API_KEY  

export default function UploadImage(){
  const [imageDisplayed, setImageDisplayed]= useState()
  const [hasNotUploadedImage, sethasNotUploadedImage] = useState(true)
  const [Loading, setLoading] = useState(false)
  
  //this is for image size error  and api error message to display to users either bad request or image size limit
  const [imageScanError, setImageScanError] = useState()

  //  to display Loading errors to users 
  const [noErrorMessage, setnoErrorMessage]= useState()   

  // this is to handle request error
  const [displayErrorMessage , setdisplayErrorMessage ] = useState(false)
 
  //  this is for when image has been scanned. to display 2 text areas for corrections if the image was not properly scanned
  const [imageHasBeenScanned, setimageHasBeenScanned] = useState()
  const imageInputRef = useRef()

// this is to display extracted text  and summarized text to the users
 const [extractedText, setextractedText] = useState()
 const [summarizedtext, setsummarizedText] = useState()

// to handle disabled text area 
const [disabledText , setdisabledText] = useState(true)

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
          setImageDisplayed(image)
        }    
    }

    //  this is to scan image for text using the api
    const scanOptions = new FormData()
    scanOptions.append('apikey', apikey)
    scanOptions.append('file', imageDisplayed)
    scanOptions.append('language', 'eng')
    scanOptions.append('OCREngine', 2)
    scanOptions.append('scale', true)
   
    // ignore ssl erros because of http api request
    const agent = new https.Agent({
      rejectUnauthorized: false
    })

    async function HandleScanning(){
       setLoading(true)
        //making sure the image is 1mb. if it is not we cannot scan the image
       if (imageDisplayed.size <= 1048576){
         try {  
           console.log('scanning')     
           const response = await axios.post(apiUrl, scanOptions, {
             headers: {
               "Content-Type": 'multipart/form-data'
             }
           })
           setLoading(false)
           setimageHasBeenScanned(true)
           setnoErrorMessage(true)
           setImageScanError(' ') 
           setextractedText(response.data.ParsedResults[0].ParsedText, 'it worked')
         } catch (error) {
           setLoading(true)
           setLoading(false)
           setimageHasBeenScanned(false)
           setImageScanError('Something went wrong')          
           console.log(error.mesage, 'it did not work bro')
        } 
       } else if (imageDisplayed.size > 1048576) {
        console.log('image is greater than 1mb')
        try {
          const fileContent = imageDisplayed;
          // Create FormData object and append the file
          const formData = new FormData();
          formData.append('files', fileContent, 'compressedimage.png');
          formData.append('qlty', 75)
          formData.append('force', true)
          
          //  compress the image
          const res = await axios.post(compressionUrl, formData, {httpAgent: agent })   
          console.log(res.data);
          const compressedImage = res.data.dest
          // new formdata for compressed image
          const newScanOptions = new FormData()
          newScanOptions.append('apikey', apikey)
          newScanOptions.append('url', compressedImage)
          newScanOptions.append('language', 'eng')
          newScanOptions.append('OCREngine', 2)
          newScanOptions.append('scale', true)
          
           try{
             console.log('scanning')     
             const response = await axios.post(apiUrl, newScanOptions, {
               headers: {
                 "Content-Type": 'multipart/form-data'
               }
             })
             console.log(response)
             setLoading(false)
             setimageHasBeenScanned(true)
             setnoErrorMessage(true)
             setImageScanError(' ') 
             setextractedText(response.data.ParsedResults[0].ParsedText, 'it worked')
           } catch(error){
            setLoading(false)
            setimageHasBeenScanned(false)
            setImageScanError('Image is more than 1 mb')  
            console.log(error, 'it did not work')        
           }
        } catch (error) {
          setLoading(true)
          setLoading(false)
          setimageHasBeenScanned(false)
          setImageScanError('Image is more than 1 mb')          
          console.log(error.mesage, 'it did not work bro')
        }
       } else{
        setLoading(true)
        setLoading(false)
        setimageHasBeenScanned(false)
        setImageScanError('Something went wrong')          
        console.log(error.mesage, 'it did not work bro')
       }
      
    }

    // to handle textarea Activity
    function handleTextArea (e){
      setextractedText(e.target.value)
    }

    // to summarize text
    async function HandleSummary(){  
      if (extractedText.length > 250 ){
          try {
            setnoErrorMessage(true)
            setdisplayErrorMessage(false)
            setsummarizedText(' ')
            setLoading(true)
            const summarize = await Summary.summarize({text: extractedText, format: 'paragraph', extractiveness: 'medium', temperature: 0.1, additionalCommand:"Generate a summary _" })
            setsummarizedText(summarize.summary)
            setLoading(false)
            setdisabledText(false)
            
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
    
          <div className="w-full flex justify-center" style={{maxWidth:'1200px', margin: '0px auto'}}>
          {
            hasNotUploadedImage ?( 
             <div className=" flex flex-col  items-center w-[95%] bg-white rounded h-[400px] justify-center gap-[1rem]">
            {/* hidden input element connected to the <button></button> element to upload images */}
              <input type="file"
                accept="image/*" 
                ref={imageInputRef}
                onChange={handleImageUpload}
                id="imageupload" 
                className="hidden"
              />
            {/* this is the custom button that will be displayed to users */}
                <button type="button"
                  onClick={handleButtonClick} 
                  className="button flex items-center justify-between gap-2 cursor-pointer"
                > 
                  <span className="mt-[3px]">
                    <ion-icon name="cloud-upload"></ion-icon>
                  </span> 
                    Upload Image
                </button>
            <div>
            <p className="text-gray-400 text-[14px] text-center">Image upload limit <strong className="">1 mb</strong></p>
            <p className="text-gray-400 text-[14px]">Supported Images <strong className="text-Blue">jpg, png , Gif</strong> </p>
            </div>
            
          </div>
            ):( !imageHasBeenScanned ?(
            <div className="flex flex-col pb-3  items-center w-[95%] bg-white rounded h-[400px] justify-center gap-[0.5rem]">
                <div className=" h-[20px] mt-4">
                <p className='text-[12px] text-red-500 '>{imageScanError}</p>
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
                <div className="flex flex-col  gap-2 items-center w-full relative" style={{maxWidth: '1200px', margin: '0px auto'}} >
                 <div className="flex flex-col items-center laptop:flex-row w-full gap-[3rem]">
                 <textarea  name="defaultext"  className="textarea " value={extractedText} onChange={handleTextArea}  />
                  <textarea name="summarizedtext" className="textarea-2"  value={summarizedtext} placeholder="Summarized Text Will Be Here" disabled={disabledText} ></textarea>
                 </div>
                <div className="bottom-0 w-full flex justify-center bg-white  h-[60px] laptop:mt-4 items-center">
                <button className="button" onClick={HandleSummary}> {
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
