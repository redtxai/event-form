import { MouseEventHandler } from "react";

type ButtonProps = {
  text: string,
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <button className={`
      py-2.5 px-6
      rounded-md bg-indigo-550
      font-bold text-base
      text-white
      leading-4-07 ${className ? className : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;
