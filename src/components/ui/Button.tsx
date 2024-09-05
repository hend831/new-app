import { ReactNode ,ButtonHTMLAttributes} from "react"


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
    children: ReactNode,
    className: string,
    width?: string
}

const Button = ({children,className ,width, ...rest}: IProps) => {
  return (
    <button className={`${className}  ${width}  text-white rounded-lg my-2 p-2 h-9  `}{...rest}>
        {children}
    </button>
  )
}

export default Button