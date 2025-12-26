"use client"
import { useState } from "react"
import Accordian from "../Accordian"

 let first_faq = [
    {   
        question: 'How do I download the app?',
        answer: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'
    },
    {  
        question: 'Can I find a nearby Scoots?',
        answer: 'Aut consectetur nihil, quidem ipsa natus quasi, praesentium nisi hic distinctio debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia rerum laborum alias inventore nostrum sit voluptatibus sapiente.'
    },
    {   
        question: 'Do I need a license to ride?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia rerum laborum alias inventore nostrum sit voluptatibus sapiente, aut consectetur nihil, quidem ipsa natus quasi, praesentium nisi hic distinctio debitis.'
    }
]
 let second_faq = [
    {  
        question: 'Should I wear a helmet?',
        answer: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'
    },
    {   
        question: 'How about the rules & regulations?',
        answer: 'Sed officia rerum laborum alias inventore nostrum sit voluptatibus sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur nihil, quidem ipsa natus quasi, praesentium nisi hic distinctio debitis.'
    },
    {  
        question: 'What if I damage my Scoot?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia rerum laborum alias inventore nostrum sit voluptatibus sapiente, aut consectetur nihil, quidem ipsa natus quasi, praesentium nisi hic distinctio debitis.'
    }
]
const FAQ = () => {
    let [active,setActive] = useState(0)
    let [active2,setActive2] = useState(0)
  return (
    <section className='container pt-[145px] pb-30 md:py-30 lg:pt-30 lg:pb-40 md:mx-auto md:px-10 xl:px-0'>
        <h1 className=" text-center text-[32px] md:text-5xl font-bold font-mono text-dark-navy leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px]">FAQs</h1>
       
        <div className=" my-16 flex items-center lg:items-start flex-col lg:flex-row justify-between">
            <h3 className=" text-center lg:text-start text-dark-navy font-mono font-bold text-2xl md:text-[40px] leading-7 md:leading-12 tracking-[-1.07px] md:tracking-[-1.79px]">How it works</h3>
            <div className=" mt-8 lg:mt-0 w-[311px] md:px-10 md:w-full lg:px-0 lg:w-[730px] flex flex-col gap-4">
                {
                  first_faq.map((item, index) => {
                    return <Accordian key={index} activeToggle={()=> setActive(active === index ? null : index)} isOpen={index === active} question={item.question} answer={item.answer}/>
                  })
                }
            </div>
        </div>

        <div className=" mt-12 md:mt-16 lg:mt-0 flex items-center lg:items-start flex-col lg:flex-row justify-between">
            <h3 className=" text-center lg:text-start text-dark-navy font-mono font-bold text-2xl md:text-[40px] leading-7 md:leading-12 tracking-[-1.07px] md:tracking-[-1.79px]">Safe driving</h3>
            <div className="mt-8 lg:mt-0 w-[311px] md:px-10 lg:px-0 md:w-full lg:w-[730px] flex flex-col gap-4">
                {
                  second_faq.map((item, index) => {
                    return <Accordian key={index} activeToggle={()=> setActive2(active2 === index ? null : index)} isOpen={index === active2} question={item.question} answer={item.answer}/>
                  })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQ