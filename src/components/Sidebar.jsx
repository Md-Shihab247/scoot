import Link from "next/link"
import Button from "./common-components/Button"

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
const Sidebar = () => {
  return (
    <div className=" lg:hidden h-screen w-[256px] px-5 bg-[#333A44]">
        <ul className=" pt-26.25 flex flex-col gap-6 text-light-gray font-mono font-bold text-[18px] leading-6.25">
            {
             navigation.map((item, index) => (
                <li key={index}>
                    <Link href={item.route}>{item.name}</Link>
                </li>
            ))
            }
           
        </ul>
        <div className=" relative top-[265px] flex justify-center">
          <Button text={'Get Scootin'}/>
        </div>
    </div>
  )
}

export default Sidebar