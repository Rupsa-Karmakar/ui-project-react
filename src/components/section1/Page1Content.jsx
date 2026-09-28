import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import RightCard from './RightCard'

const Page1Content = (props) => {
  return (
   <div className=' h-[90vh] flex justify-between items-center pb-16 pt-6 gap-10 px-7'>
      <LeftContent />
      <RightContent users={props.users} />
      

   </div>
  )
}

export default Page1Content
