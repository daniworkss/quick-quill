import React, { useState } from 'react'
export default function Header() {  
  const [changeIcon ,setChangeIcon]= useState(false)

  function toogletheme(){
    const body = document.body;
    body.classList.add('bg-[#F1F1F1]')
    body.classList.toggle('dark')
    console.log(body.classList)
  if (body.classList[0] === 'dark'){
    setChangeIcon(true)
  } else{
    setChangeIcon(false)
  }
 
}

  return (
    <>
        <div className=' bg-white dark:bg-black'> 
          <header className='pl-2 pr-2  tablet:pl-6 tablet:pr-6 laptop:pl-[3rem] laptop:pr-[3rem] pt-4 pb-[.2rem] w-full h-[75px] mb-0 flex items-center justify-between border-b-gray-100 border-b-2 '>
            {/* for logo */}
            <div className='logo'>
              <h2 className='text-[25px] dark:text-white'>Quick<strong className='text-Blue'>Quill</strong></h2>
            </div>
            {/* for theme and account icons */}
            <div className='icons-container flex items-center gap-[15px]'>
                <div className='icons' onClick={toogletheme}>
                  <ion-icon name={`${changeIcon ? 'moon': 'sunny'}`}></ion-icon>
                </div>
                <div className='icons'>
                  <ion-icon name="person"></ion-icon>
                </div>   
            </div>
          </header>
        </div>
    </>
  
    
  )
}
