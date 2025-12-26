import AboutBanner from "@/components/about-sections/AboutBanner"
import ComboGroup from "@/components/common-components/ComboGroup"
import mobility from '../../images/mobility.png'
import mobilityMask from '../../images/mobility-mask.png'
import urban from '../../images/urban.png'
import urban_mask from '../../images/city-mask.png'
import Values from "@/components/Values"
import FAQ from "@/components/about-sections/FAQ"
const about = () => {
    let comboOneTitle = `Mobility for the digital era`
    let comboOneDesc = `Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.`
    let comboTwoTitle = `Better urban living`
    let comboTwoDesc = `We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.`
  return (
    <>
      <AboutBanner/>
      <div className=" pt-[72px] lg:py-30">
        <ComboGroup leftToright={true} hasBtn={true} btnText={'Learn More'} title={comboOneTitle} paragraph={comboOneDesc} image={mobility} alt={'mobility'} imageMask={mobilityMask}/>
      </div>
      <div className=" py-30 lg:pb-30">
        <ComboGroup leftToright={false} hasBtn={true} btnText={'Learn More'} title={comboTwoTitle} paragraph={comboTwoDesc} image={urban} alt={'urban'} imageMask={urban_mask}/>
      </div>
      <Values title={'Our values'}/>
      <FAQ/>
    </>
  )
}

export default about