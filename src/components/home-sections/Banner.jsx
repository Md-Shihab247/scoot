import Button from '../common-components/Button'
const Banner = () => {
  return (
   <section className={` bg-[url(../images/mobile-banner.png)] md:bg-[url(../images/tablet-banner.png)]  lg:bg-[url(../images/banner.jpg)] w-screen md:w-full lg:w-full bg-no-repeat bg-center h-162.5 `}>
       <div className="xl:container lg:mx-10 xl:px-0 flex flex-col items-center pt-[115px] pb-[180px] md:flex md:flex-col md:items-center lg:items-start lg:py-[152px] ">
          <h1 className=' text-center md:text-center lg:text-start max-w-[311px] md:max-w-[573px] lg:max-w-125 font-mono font-bold text-[40px] md:text-[56px] text-white leading-10 md:leading-14 tracking-[-1.79px] md:tracking-[-2.5px]'>
            Scooter sharing made simple 
          </h1>

          <div className=' flex items-center lg:items-start flex-col lg:flex-none text-center lg:text-start xl:ml-[90px] mt-[22px] lg:mt-10'>
            <p className=' max-w-[311px] md:max-w-[573px] lg:max-w-101.25 text-[15px] font-sans text-white font-normal leading-6.25'>
            Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
          </p>

          <div className=' mt-9 lg:mt-10'>
            <Button text={'Get Scootin'}/>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Banner
