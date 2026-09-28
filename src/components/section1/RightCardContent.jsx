import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
     <div>
       <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus impedit architecto, officiis perspiciatis ad.</p> 

       <div className='flex justify-between'>
       <button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full '>{props.tag}</button>
       <button className='bg-blue-600 text-white font-medium  px-3 py-3 rounded-full '>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
       </button>
      </div>
     </div>
    </div>
</div>
  )
}

export default RightCardContent
