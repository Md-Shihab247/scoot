import Image from 'next/image'
import React from 'react'

const FeaturePrototype = ({imageUrl,alt,title,paragraph,isWrapper}) => {
  return (
    <div className='max-w-[311px] md:max-w-[573px] lg:max-w-87.5 flex flex-col md:flex-row lg:flex-col md:justify-between items-center lg:items-start text-center md:text-start md:gap-x-[80px] lg:gap-x-0 lg:text-start z-50 relative'>
        <div>
            <Image src={imageUrl} alt={alt} className=' z-50'/>
            {isWrapper && <div className=' w-[300%] h-20 bg-white absolute -z-10 top-0 left-[80px]'></div>}
        </div>
        <div className=' md:max-w-[398px]'>
          <h3 className=' font-mono text-2xl leading-7 tracking-[-1.07px] font-bold text-dark-navy mt-10'>{title}</h3>
          <p className=' font-sans text-[15px] leading-6.25 text-dim-gray mt-6.75'>{paragraph}</p>
        </div>
    </div>
  )
}

export default FeaturePrototype