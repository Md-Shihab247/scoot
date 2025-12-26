import ValuesCard from './ValuesCard'
import cardOne from '../images/tech.png'
import cardTwo from '../images/integrity.png'
import cardThree from '../images/community.png'

let cardInfo = [
  {
  image: cardOne,
  alt: 'tech',
  number: '01',
  title: 'Our tech',
  paragraph: `We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!`
},
  {
  image: cardTwo,
  alt: 'integrity',
  number: '02',
  title: 'Our integrity',
  paragraph: `We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.`
},
  {
  image: cardThree,
  alt: 'community',
  number: '03',
  title: 'Our community',
  paragraph: `We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.`
}
]

const Values = ({title}) => {
  return (
    <section className=' container '>
         <h1 className=' text-center text-dark-navy font-mono font-bold text-[32px] md:text-5xl leading-8 md:leading-12 tracking-[-1.43px] md:tracking-[-2.14px]'> {title} </h1>

         <div className=' mt-16 md:mt-[50px] lg:mt-12 flex flex-col gap-y-[56px] lg:gap-y-0 lg:flex-row items-center justify-between'>
            {
              cardInfo.map((card, index) => {
                return <ValuesCard key={index} image={card.image} alt={card.alt} number={card.number} title={card.title} paragraph={card.paragraph}/>
              })
            }
         </div>
    </section>
  )
}

export default Values