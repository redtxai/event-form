import { MouseEventHandler } from "react";

type ButtonProps = {
  text?: string,
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}

const Button = ({ text, className, onClick, children }: ButtonProps) => {
  return (
    <button className={`${className ? className : ''}`}
      onClick={onClick}
    >
      {text || children}
    </button>
  )
}

export default Button;
