

const  Button = (props)=>{
  return (
    <>
    <div >
      <button  onClick={props.onClick}

       className='w-[120px] h-[30px] mt-1.5 border-2 rounded-xl  border-black bg-black text-[12px] font-bold text-white focus:bg-white focus:text-black'>
        {props.text}
      </button>
      
    </div>
  
    </>)
}

export default Button
