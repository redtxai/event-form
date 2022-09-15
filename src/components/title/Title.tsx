import { ReactElement } from "react"

type TitleType = 'large' | 'small'

type TitleProps = {
  text: string,
  type: TitleType
  className?: string,
}

function Title({ text, type, className,  }: TitleProps) {

  const titleMap: Record<TitleType, ReactElement<HTMLHeadingElement>> = {
    large: <h1 className={`text-blue-950 font-bold text-4xl-intermediate ${className ? className : ''}`}>{text}</h1>,
    small: <h6 className={`text-blue-950 tracking-widestish font-semibold text-xl leading-6 ${className ? className : ''}`}>{text}</h6>,
  }

  return titleMap[type]
}

export default Title;
