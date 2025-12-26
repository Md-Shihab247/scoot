import React from 'react'
import FeaturePrototype from '../FeaturePrototype'
import appIcon from '../../icons/app-icon.svg'
import scooterIcon from '../../icons/scooter-icon.svg'
import rideIcon from '../../icons/ride-icon.svg'
const FeatureData = [
  {
    imageUrl: appIcon,
    alt: 'App icon',
    title: 'Locate with app',
    paragraph: `Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.`
  },
  {
    imageUrl: scooterIcon,
    alt: 'Scooter icon',
    title: 'Pick your scooter',
    paragraph: `We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.`
  },
  {
    imageUrl: rideIcon,
    alt: 'Ride icon',
    title: 'Enjoy the ride',
    paragraph: `Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.`
  }
]

const Features = () => {

  return (
    <section className=' relative overflow-hidden'>
      <div className='w-[70%] h-[15px] hidden lg:flex bg-light-gray absolute z-0 top-[200px] left-0'></div>
      <div className='h-[650px] w-[15px] hidden md:flex lg:hidden bg-light-gray absolute z-0 top-0 left-[138px]'></div>
        <div className=' container pt-30 md:pt-[122px] lg:pt-40 flex flex-col gap-y-12 lg:gap-y-0 lg:flex-row items-center justify-between '>
         <FeaturePrototype imageUrl={FeatureData[0].imageUrl} alt={FeatureData[0].alt} title={FeatureData[0].title} paragraph={FeatureData[0].paragraph}/>
         <FeaturePrototype imageUrl={FeatureData[1].imageUrl} alt={FeatureData[1].alt} title={FeatureData[1].title} paragraph={FeatureData[1].paragraph}/>
         <FeaturePrototype isWrapper={true} imageUrl={FeatureData[2].imageUrl} alt={FeatureData[2].alt} title={FeatureData[2].title} paragraph={FeatureData[2].paragraph}/>
        </div>
    </section>
  )
}

export default Features