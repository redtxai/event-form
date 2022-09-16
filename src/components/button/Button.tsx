import { MouseEventHandler } from "react";

type ButtonProps = {
  text: string,
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <button className={`${className ? className : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;
