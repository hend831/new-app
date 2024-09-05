import { InputHTMLAttributes } from "react"

interface IProps extends  InputHTMLAttributes<HTMLInputElement> {}
    
const Input = ({...rest}: IProps) => {
    return (

<input  className="border border-gray-300 rounded-lg shadow-lg
 focus:ring-2 focus:ring-indigo-500
 focus:border-indigo-500 px-3 py-3 h-8 text-sm text-gray-700 
  placeholder-gray-400"{...rest} />

    )}
    export default Input