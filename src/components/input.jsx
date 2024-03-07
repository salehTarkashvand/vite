import { useId } from "react";

const Input = ({placeholder , type , value , name , onChange,label , error , ...props}) => {
    const id =useId()
    return ( 
   <div>
    <label className="pr-3 block mb-2" htmlFor={id}>{label}</label>
    <input
        
        className="bg-slate-200 pl-2 mb-1 "
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        {...props}
    />
    {error && (
        <span className="text-red-600 text-xs block py-3" >
            {error}
        </span>
    )}

   </div> );
}

export default Input ;