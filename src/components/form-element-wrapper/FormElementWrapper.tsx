import Label from "../label/Label"

type FormElementWrapperProps = {
  text?: string
  htmlFor?: string
  className?: string
  children?: React.ReactNode
}


const FormElementWrapper = ({ text, htmlFor, className, children }: FormElementWrapperProps) => {
  return <section className={`w-full flex flex-col ${className ? className : ''}`}>
    {text && <Label text={text} htmlFor={htmlFor} className="mb-3"></Label>}
    {children}
  </section>
}

export default FormElementWrapper
