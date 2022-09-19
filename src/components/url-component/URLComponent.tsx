import Input, { InputProps } from "../input/Input";

type InputURLProps = Omit<InputProps, keyof { type: string }>

type URLComponentProps = InputURLProps & {
  domain: string
  domainClassName?: string
  urlClassName?: string
  value?: string
}

const URLComponent = ({ domain, domainClassName, urlClassName, className, ...inputProps  }: URLComponentProps) => {
  return (
    <div className={`flex w-full rounded-md ${urlClassName ? urlClassName : ''}`}>
      <span className={`
        flex-none
        inline-flex items-center
        rounded-l-md
        border
        border-gray-150
        border-r-0
        py-1.5 px-3
        text-slate-475
        text-xs
        leading-4-06
        tracking-tightish
        sm:text-sm-intermediate
        sm:py-2.5 sm:px-5
        ${domainClassName ? domainClassName : ''}`}>
        {domain}
      </span>
      <Input className={`grow rounded-none rounded-r-md ${className ? className : ''}`} { ...inputProps }></Input>
    </div>
  )
}

export default URLComponent;
