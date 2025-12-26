import CountryLayout from "./CountryLayout"

const country = ['New York','London','Jakarta','Yokohama']
const LocationCountry = () => {
  return (
    <div className=" flex flex-col gap-4 items-center">
        
          {country.map((item,index)=>{
            return <CountryLayout key={index} country={item}/>
          })
          }
        
    </div>
  )
}

export default LocationCountry