import Image from "next/image"
import playStore from '@/images/play-store.svg'
import appStore from '@/images/app-store.svg'
import logo from '@/images/scoot2.svg'
import Link from "next/link"
import facebookIcon from '@/icons/facebook.png'
import twitterIcon from '@/icons/twitter.png'
import instagramIcon from '@/icons/instagram.png'

 let navigation = [
    {
      route: '/about',
      name: 'About'
    },
    {
      route: '/location',
      name: 'Location'
    },
    {
      route: '/careers',
      name: 'Careers'
    },
  ]

const Footer = () => {
  return (
   <>
      <footer className=" bg-dark-navy bg-[url('../images/footer-circle.png')] py-[88px] lg:py-25.5 relative  bg-no-repeat bg-bottom-right md:mx-auto md:px-10 xl:px-0 ">
        <div className=' max-w-[311px] md:max-w-[457px] mx-auto lg:container flex flex-col lg:flex-row items-center justify-between'>
            <h1 className=" text-center lg:text-start font-mono font-bold text-[32px] leading-8 md:text-[48px] md:leading-12 max-w-[415px] md:max-w-[457px] text-white tracking-[-1.43px] md:tracking-[-2.14px]">
              Sign up and Scoot off today
            </h1>

            <div className=" mt-10 lg:mt-0 flex items-center justify-center gap-3 lg:gap-4.5">
              <Image src={appStore} alt="app store" className=" w-[114px] lg:w-[159px]"/>
              <Image src={playStore} alt="play store" className=" w-[130px] lg:w-[182px]"/>
            </div>
        </div>
      </footer>

      <div className=" pt-16 pb-[88px] md:py-8 bg-[#333A44]">
         <div className=" lg:container md:px-10 xl:px-0 md:mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className=" flex flex-col md:flex-row items-center gap-x-14.5">
            <Link href={'/'}>
              <Image src={logo} alt="logo"/>
            </Link>

          <ul className=" mt-10 md:mt-0 flex flex-col md:flex-row items-center gap-4 lg:gap-8 text-dim-gray font-sans font-bold text-[15px] leading-6.25">
              {
              navigation.map((item, index) => (
                  <li key={index}>
                      <Link href={item.route}>{item.name}</Link>
                  </li>
              ))
              }
          </ul>
          </div>

          <div className=" mt-[85px] md:mt-0 flex items-center justify-center gap-x-6">
            <Link href={'/'}>
              <Image src={facebookIcon} alt="facebook"/>
            </Link>
            <Link href={'/'}>
              <Image src={twitterIcon} alt="twitter"/>
            </Link>
            <Link href={'/'}>
              <Image src={instagramIcon} alt="instagram"/>
            </Link>
          </div>
         </div>
      </div>
   </>

  )
}

export default Footer
