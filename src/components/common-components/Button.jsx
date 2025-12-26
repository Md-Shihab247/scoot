
const Button = ({text}) => {
  return (
    <button className=' w-45 h-13.25 font-bold font-mono text-[15px] leading-6.25 cursor-pointer bg-yellow text-white hover:bg-transparent border-transparent transition-all duration-500 border-2 hover:border-yellow hover:text-yellow'>
        {text}
    </button>
  )
}

export default Button