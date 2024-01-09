
/* eslint-disable @next/next/no-img-element */
import axios from "axios"
import { useState } from "react"
export default function Imagecompressor(){
  const [image, setImage] = useState()
  const [imageDisplayed, setImageDisplayed] = useState('')
  const defautImage = '/second.jpg'
  

  function handleimageupload(e){
    const image = e.target.files[0]
    if (image){
      console.log(image.size)
      setImage(image)
    }
  }

  // const blobIMage = new Blob([defautImage], { type: defautImage.type });
  const formData = new FormData()
  formData.append('file', image)
  formData.append('type', 'file')
  formData.append('compression', 'intelligent' )
  formData.append('cmyktorgb', '1');
  formData.append('keep_exif', '0');
  formData.append('webp', '0');
  formData.append('max_width', '0');
  formData.append('max_height', '0');

 const apiKey = process.env.NEXT_PUBLIC_COMPRESSION_KEY 
  
 async function CompressImage (){
    console.log('click')
    const sendInfo = await axios.post('https://api.megaoptim.com/v1/optimize', formData ,{
      headers:{
        'Content-Type':'multipart/form-data',
         'X-API-KEY' : apiKey
      }
    })
    console.log(sendInfo )
    const imageProcessed = await axios.post(`https://api.megaoptim.com/v1/optimize/${sendInfo.data.process_id}/result`, {
      headers:{
        'X-API-KEY' : apiKey
      }
    })
    console.log(imageProcessed)
  }
  return (
    <div>
      <img src={defautImage} alt='image-1' />
      <input type="file" accept="image" onChange={handleimageupload}></input>
      <img src={imageDisplayed} alt="image Uploaded" className="bg-red object-fill " />    

      <button className="button" onClick={CompressImage}> compress image</button>
    </div>
  )
};
