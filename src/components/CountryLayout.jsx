import React from 'react'

const CountryLayout = ({country}) => {
  return (
    <div className=' w-[311px] h-[72px] bg-[#fff4df] text-dark-navy font-mono font-bold text-2xl leading-7 tracking-[-1.07px] flex items-center justify-center'>
        {country}
    </div>
  )
}

export default CountryLayout