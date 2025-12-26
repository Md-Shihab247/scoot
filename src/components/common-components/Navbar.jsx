"use client"
import Image from "next/image"
import logo from '../../images/scoot.svg'
import menuIcon from '../../icons/menu.svg'
import menuClose from '../../icons/menu-close.svg'
import Link from "next/link"
import Button from "./Button"
import Sidebar from "../Sidebar"
import { useContext } from "react"
import { SidebarContext } from "../MainContext"

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

const Navbar = () => {
  let {menu, setMenu} = useContext(SidebarContext)
  return (
    <div className=" lg:relative">
      
      <nav className=" relative lg:container py-5.5 flex justify-center md:justify-between md:px-10  md:mx-auto lg:px-0 lg:justify-between items-center">
      <div className=" flex items-center gap-x-14.5 ">
        <div className=" absolute left-5 top-[30px]">
        <Image onClick={()=> setMenu(true)} src={menuIcon} alt="menu" className={`${menu ? 'hidden' : 'block'} md:hidden lg:hidden`}/>
        <Image onClick={()=> setMenu(false)} src={menuClose} alt="menu close" className={`${menu ? 'block' : 'hidden'} md:hidden lg:hidden`}/>
      </div>
        <Link href='/'>
            <Image src={logo} alt="logo"/>
        </Link>

        <ul className=" hidden md:flex lg:flex items-center gap-x-8 text-dim-gray font-sans font-bold text-[15px] leading-6.25">
            {
             navigation.map((item, index) => (
                <li key={index}>
                    <Link href={item.route}>{item.name}</Link>
                </li>
            ))
            }
           
        </ul>
      </div>

        <div className=" hidden md:flex lg:flex">
          <Button text={'Get Scootin'}/>
        </div>
    </nav>

    <div className={`${menu ? ' left-0' : ' -left-full'} transition-all duration-300 ease-in-out z-50 absolute top-[73px] lg:hidden`}>
      <Sidebar/>
    </div>
    </div>
  )
}

export default Navbar