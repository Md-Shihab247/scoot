import React from 'react'
import Button from './common-components/Button'

const MessageUs = () => {
  return (
    <section className=' container flex flex-col lg:flex-row items-center pb-30'>
        <h2 className='  text-center lg:text-start max-w-[311px] md:max-w-[457px] lg:max-w-87.5 text-dark-navy font-mono font-bold leading-8 md:leading-12 text-[32px] md:text-5xl tracking-[-1.43px] md:tracking-[-2.14px]'>Your City Not Listed?</h2>
        <p className=' text-center lg:text-start my-8 md:my-10 lg:my-0 lg:ml-[30px] lg:mr-[105px] max-w-[311px] md:max-w-[573px] lg:max-w-[445px] font-sans font-normal text-[15px] leading-6.25 text-dim-gray'>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>

        <Button text={'Message Us'}/>
    </section>
  )
}

export default MessageUs