import Input, { InputProps } from "../input/Input";

type InputURLProps = Omit<InputProps, keyof { type: string }>

type URLComponentProps = InputURLProps & {
  domain: string
  domainClassName?: string
  urlClassName?: string
}

const URLComponent = ({ domain, domainClassName, urlClassName, className, ...inputProps  }: URLComponentProps) => {
  return (
    <div className={`flex max-w-lg rounded-md shadow-sm ${urlClassName ? urlClassName : ''}`}>
      <span className={`
        inline-flex items-center
        rounded-l-md
        border
        border-gray-150
        border-r-0
        shadow-sm
        py-2.5 px-5
        text-slate-475
        text-sm-intermediate
        leading-4-05
        tracking-tightish
        ${domainClassName ? domainClassName : ''}`}>
        {domain}
      </span>
      <Input className={`rounded-none rounded-r-md ${className ? className : ''}`} { ...inputProps }></Input>
    </div>
  )
}

export default URLComponent;
