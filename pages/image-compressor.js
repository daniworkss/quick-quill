
/* eslint-disable @next/next/no-img-element */
import axios from "axios"
import { useState } from "react"
export default function Imagecompressor(){
  const [imageDisplayed, setImageDisplayed] = useState('')
  const defautImage = '/queen-studioflyer-2.jpg'
  const url = 'http://api.resmush.it/?qlty=80'

  // Function to read file content asynchronously      
  async function readFile(defautImage) {
    const response = await fetch(defautImage);
    const data = await response.blob();
    console.log (data)
    return data;
  }

  async function CompressImage(){
      try {
        const fileContent = await readFile(defautImage);

        // Create FormData object and append the file
        const formData = new FormData();
        formData.append('files', new File([fileContent], 'compressedimage.jpg',));

        const res = await axios.get(url, formData)   
        console.log(res.data);
        setImageDisplayed(res.data.src)
        
      } catch (error) {
        console.error('Error:', error);
      }
    };


  return (
    <div>
      <img src={defautImage} alt='image-1' />
      <img src={imageDisplayed} alt="image Uploaded" className="bg-red object-fill " />    

      <button className="button" onClick={CompressImage}> compress image</button>
    </div>
  )
};
