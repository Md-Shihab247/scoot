import Image from "next/image"

const ValuesCard = ({image, alt ,number,title, paragraph}) => {
    let styles = 'font-mono font-bold text-2xl leading-7 tracking-[-1.07px] text-dark-navy'
  return (
    <div className=" max-w-[311px] md:max-w-[457px] lg:max-w-[350px]">
        <div className=" p-[55px] md:flex md:flex-col md:items-center relative box-border">
            <Image src={image} alt={alt}/>
            <div className={` ${styles} absolute bottom-0 left-[50%] translate-x-[-50%] bg-yellow h-[92px] w-[92px] rounded-full flex items-center justify-center`}>{number}</div>
        </div>
        <div className=" mt-4 md:mt-8 text-center">
            <h2 className={styles}>{title}</h2>
            <p className=" mt-[27px] font-sans font-normal text-[15px] leading-6.25 text-dim-gray">{paragraph}</p>
        </div>
    </div>
  )
}

export default ValuesCard