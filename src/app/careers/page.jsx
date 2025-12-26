import ComboGroup from "@/components/common-components/ComboGroup"
import OthersBanner from "@/components/OthersBanner"
import mission from "@/images/mission.png"
import mission_mask from "../../images/telemetry-mask.png"
import Values from "@/components/Values"
import JobVacancy from "@/components/JobVacancy"
const locations = () => {
  let title = 'Care to join our mission?'
  let paragraph= `We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!`
  return (
    <>
      <OthersBanner heading="Careers"/>
      <div className=" py-30">
        <ComboGroup image={mission} imageMask={mission_mask} title={title} paragraph={paragraph} hasBtn={true} btnText={'Say Hello'} alt={'mission'} leftToright={true}/>
      </div>
      <Values title={'Why join us?'}/>
      <JobVacancy/>
    </>
  )
}

export default locations