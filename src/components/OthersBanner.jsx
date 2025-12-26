import React from 'react'

const OthersBanner = ({heading}) => {
  return (
    <div className='bg-[url(../images/others-mobile-banner.jpg)] lg:bg-[url(../images/others-banner.png)] py-15.5'> 
        <div className=" container">
          <h1 className=" text-center lg:text-start text-white font-mono font-bold text-[40px] lg:text-[56px] leading-10 lg:leading-[56px] tracking-[-1.79px] lg:tracking-[-2.5px]">  {heading}</h1>
        </div>
      </div>
  )
}

export default OthersBanner