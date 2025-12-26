"use client"

import Image from "next/image"
import arrow from '../icons/faq-arrow.svg'
const Accordian = ({question, answer,activeToggle, isOpen}) => {

  return (
    <div onClick={activeToggle} className=" cursor-pointer bg-[#F2F5F9] p-8 lg:px-10 lg:py-8">
        <div className=" flex items-center justify-between">
            <h2 className=" pr-2 lg:pr-0 text-dark-navy font-mono font-bold text-lg md:text-2xl leading-6 md:leading-7 tracking-[-0.8px] md:tracking-[-1.07px]"> {question} 
            </h2>
            <Image src={arrow} alt="arrow" className={`${isOpen ? "rotate-0" : "rotate-180"} transition-all`}/>
        </div>
        <p className={` ${isOpen ? "h-auto overflow-visible mt-4" : "h-0 overflow-hidden mt-0"} transition-all font-sans text-dark-navy font-normal text-[15px] leading-6.25 text-dark-navy]`}> {answer} </p>
    </div>
  )
}

export default Accordian