import React from 'react'
import Button from './common-components/Button'

const Apply = ({jobPost,location}) => {
  return (
    <div className='w-[311px] md:w-full lg:w-full text-center lg:text-start bg-[#F2F5F9] px-8 pb-8 pt-9 lg:py-[35px] md:px-12 lg:pl-10 lg:pr-16 flex flex-col md:flex-row items-center justify-between'>
        <div>
            <h2 className=' font-mono font-bold text-dark-navy text-2xl leading-7 tracking-[-1.07px]'> {jobPost} </h2>
            <p className='mb-4 md:mb-0 mt-1 md:mt-2 font-sans font-normal text-[15px] leading-6.25 text-dark-navy'> {location} </p>
        </div>

        <Button text={'Apply'}/>
    </div>
  )
}

export default Apply