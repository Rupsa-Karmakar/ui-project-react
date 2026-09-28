import React from 'react'
import HeroText from './HeroText'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 bg-white '>
        <HeroText />
      <div className='h-fit p-10   '>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
      </div>
      
    </div>
  )
}

export default LeftContent
