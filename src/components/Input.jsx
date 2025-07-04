

function Input({label,type,placeholder,name}) {
  return (
    <>
   <div className="  relative mb-6 w-full max-w-sm mt-5 ml-32 pt-[-29px] ">
    <label className="absolute -top-2 left-4 bg-white px-1 text-[11px] font-semibold text-black   " htmlFor="name">{label}</label>
    <input className="w-[245px] h-[28px] border-[1.8px] border-gray-900  text-[12px] rounded-2xl pl-[7px] " 
    type={type}
    placeholder={placeholder}
    id={name}

    ></input></div> 
    </>
  )
}

export default Input
