import ComboGroup from "@/components/common-components/ComboGroup";
import Banner from "@/components/home-sections/Banner";
import Features from "@/components/home-sections/Features";
import telemetry from '../images/telemetry.png'
import telemetry_mask from '../images/telemetry-mask.png'
import city from '../images/city.png'
import city_mask from '../images/city-mask.png'
import payments from '../images/payments.png'
import payments_mask from '../images/payments-mask.png'
export default function Home() {

    let comboOneTitle = `Easy to use riding telemetry`
    let comboOneDesc = `The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.`
    let comboTwoTitle = `Coming to a city near you`
    let comboTwoDesc = `Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.`
    let comboThreeTitle = `Zero hassle payments`
    let comboThreeDesc = `Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.`

  return (
    <>
      <Banner/>
      <Features/>
      <div  className=" py-30 md:pt-[145px] md:pb-[104px] lg:py-50">
        <div>
        <ComboGroup mobleDevice={false} leftToright={true} hasBtn={true} btnText={'Learn More'} title={comboOneTitle} paragraph={comboOneDesc} image={telemetry} alt={'telemetry'} imageMask={telemetry_mask}/>
      </div>
      <div className=" py-30 md:py-30 lg:py-40 ">
        <ComboGroup mobleDevice={false} leftToright={false} hasBtn={true} btnText={'Learn More'} title={comboTwoTitle} paragraph={comboTwoDesc} image={city} alt={'telemetry'} imageMask={city_mask}/>
      </div>
      <div>
        <ComboGroup mobleDevice={false} leftToright={true} hasBtn={true} btnText={'Learn More'} title={comboThreeTitle} paragraph={comboThreeDesc} image={payments} alt={'telemetry'} imageMask={payments_mask}/>
      </div>
      </div>
    </>
  );
}
