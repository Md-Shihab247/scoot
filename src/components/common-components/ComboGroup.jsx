import React from 'react'
import Button from './Button'
import Image from 'next/image'

const ComboGroup = ({title,paragraph,hasBtn,btnText,image,imageMask='',alt,leftToright,mobleDevice,mobileImgDirection}) => {
  return (
    <section className=' overflow-hidden relative md:mx-auto md:px-10 xl:px-0'>

        <div className={` ${leftToright ? 'hidden' : '  hidden md:flex md:absolute md:top-0 md:left-0 lg:hidden xl:flex xl:absolute left-0'}`}>
            <Image src={imageMask} alt={'mask'} className={`${mobleDevice ? 'hidden' : ''}`}/>
        </div>

        <div className='container flex flex-col items-center lg:flex-row lg:justify-between'>

        <Image src={image} alt={alt} className={` lg:${leftToright ? 'hidden' : ''} w-[310px] h-[310px] md:w-[445px] md:h-[445px] rounded-full`}/>
        
        <div className='mt-[56px] lg:mt-0 max-w-[311px] md:flex md:flex-col md:items-center md:max-w-[573px] lg:flex lg:flex-col lg:items-start lg:max-w-[445px] '>
            <h3 className=' text-center lg:text-start font-mono text-[32px] md:max-w-[457px] md:text-5xl leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px] font-bold text-dark-navy'>{title}</h3>
            <p className=' text-center lg:text-start font-sans font-normal text-[15px] leading-6.25 text-dim-gray my-8 lg:my-0 md:my-10 lg:mb-10 lg:mt-6'>{paragraph}</p>
            {hasBtn && 
            <div className=' text-center lg:text-start'>
                <Button text={btnText}/>
            </div>}
        </div>

        <Image src={image} alt={alt} className={` lg:${leftToright ? '' : 'hidden'} w-[310px] h-[310px] lg:w-[445px] lg:h-[445px] hidden lg:flex rounded-full`}/>
       </div>
       
        <div className={` ${leftToright ? ' hidden md:flex md:absolute md:top-0 md:right-0 lg:hidden xl:flex xl:absolute right-0 top-0' : 'hidden'} `}>
            <Image src={imageMask} alt={'mask'} className={`${mobleDevice ? 'hidden' : ''}`}/>
        </div>
    </section>
  )
}

export default ComboGroup