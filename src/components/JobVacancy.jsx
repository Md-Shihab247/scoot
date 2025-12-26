import Apply from "@/components/Apply"

const JobVacancy = () => {
  return (
    <section  className="container pt-[145px] lg:pt-[134px] pb-30 lg:pb-[146px] flex items-center lg:items-start flex-col gap-4 lg:gap-6 md:px-10 md:mx-auto xl:px-0">
          <Apply jobPost={'General Manager'} location={'Jakarta, Indonesia'}/>
          <Apply jobPost={'UI/UX Designer'} location={'Yokohama, Japan'}/>
          <Apply jobPost={'Blog Content Copywriter'} location={'New York, United States'}/>
          <Apply jobPost={'Graphic Designer'} location={'New York, United States'}/>
          <Apply jobPost={'Fleet Supervisor'} location={'Jakarta, Indonesia'}/>
          <Apply jobPost={'UX Analyst'} location={'London, United Kingdom'}/>
    </section>
  )
}

export default JobVacancy