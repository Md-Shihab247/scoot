import OthersBanner from '@/components/OthersBanner'
import Image from 'next/image'
import map from '@/images/map.png'
import mobileMap from '@/images/mobile-map.png'
import MessageUs from '@/components/MessageUs'
import LocationCountry from '@/components/LocationCountry'
const page = () => {
  return (
    <>
      <OthersBanner heading="Locations"/>
      <div className=' mt-18 mb-10 lg:my-30 md:px-[40px] lg:px-0 md:mx-auto lg:container '>
        <Image src={map} alt='map' className=' hidden md:block'/>
        <div className=' flex justify-center'>
          <Image src={mobileMap} alt='map' className='block w-[311px]  md:hidden'/>
        </div>
      </div>
      <div className=' mt-10 mb-18 block md:hidden'>
        <LocationCountry/>
      </div>
      <MessageUs/>
    </>
  )
}

export default page