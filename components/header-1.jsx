import React, { useState } from 'react'
import Link from 'next/link';
// to disable scrolling when navigation is active 
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
export default function Header1() {  
  const [openMenu, setOpenMenu]= useState(true)

  function handleMenu(){
    setOpenMenu(!openMenu)
    if(openMenu){
      disablePageScroll()
    } else{
     enablePageScroll()
    }
  }
  function handleMenuOptionClick(){
    setOpenMenu(!openMenu)  //close menu
    enablePageScroll() 
   
  }
  return (
    <header className='w-full flex justify-center'>
        <nav className=' w-full pl-4 pr-4 tablet:pl-8 tablet:pr-8 flex items-center justify-between bg-[#9193f5] laptop:bg-white h-[80px] tablet:h-[120px] laptop:h-[100px] static overflow-x-hidden ' style={{maxWidth:'1300px'}}>
          <Link href={'/'}>
            <h1 className="logo text-white laptop:text-black text-[26px] tablet:text-[36px]">Quick<strong className='laptop:text-Blue'>Quill</strong></h1>
          </Link>
          {/* menu-btn */}
          <div className={`${!openMenu ? 'text-Blue' : 'text-white'} laptop:hidden text-[32px] tablet:text-[36px] mt-2 z-20`} onClick={handleMenu}>
          <ion-icon name={!openMenu ? 'close' : 'menu'}></ion-icon>
          </div>
          {/* links */}
          <ul className={`absolute laptop:flex bg-white top-0 right-0 h-screen w-[60%] tablet:w-[50%] laptop:w-auto laptop:flex-row  laptop:bg-inherit laptop:space-x-[2rem] laptop:space-y-0 flex-col flex space-y-[2rem] pl-[2rem] pt-[15rem] laptop:p-0  laptop:static text-[16px] tablet:text-[18px] laptop:text-[16px] laptop:font-semibold tablet:pt-[20rem] z-10  laptop:items-center laptop:h-auto laptop:text-black laptop:opacity-[100%]   ${openMenu ? ' opacity-[0%] hidden  transition-all duration-[.2s] ease-out laptop:transition-none': ' transition-all duration-[.2s] ease-in laptop:transition-none flex opacity-[100%]'}`}>
            <Link href={''} onClick={handleMenuOptionClick}>Home</Link>
            <Link href={'#about'} onClick={handleMenuOptionClick}> About </Link>
            <Link href={'#features'} onClick={handleMenuOptionClick} className=''>Features</Link>
            <Link href={'#faq'} onClick={handleMenuOptionClick} className=''>FAQ's</Link>
            <Link href={'/contact-us'} onClick={handleMenuOptionClick} className='text-Blue font-bold laptop:hidden laptop:rounded-[5px] laptop:pl-4 laptop:pr-4'>Contact Us</Link>
          </ul>
          <Link href={''} onClick={handleMenuOptionClick} className='text-white laptop:bg-Blue hidden laptop:block font-bold  laptop:p-3 laptop:rounded-[5px] laptop:pl-6 laptop:pr-6 hover:border-Blue hover:bg-inherit transition-colors duration-[.2s] hover:text-Blue border-[1px]'>Contact Us</Link>
       {/* for shadow-background */}
        <div  onClick={handleMenuOptionClick} className={`dark-bg bg-black absolute top-0 right-0 h-screen laptop:hidden w-full opacity-[30%]  ${!openMenu ? 'block': 'hidden'}`}></div>
    </nav>
    </header>

   
  
  )
}
