import FormErrorMessage from "../form-error-message/FormErrorMessage"
import Label from "../label/Label"

type FormElementWrapperProps = {
  text?: string
  errorText?: string
  showError?: boolean
  htmlFor?: string
  className?: string
  children?: React.ReactNode
}


const FormElementWrapper = ({ text, errorText, showError, htmlFor, className, children }: FormElementWrapperProps) => {
  return <section className={`w-full flex flex-col relative ${className ? className : ''}`}>
    {text && <Label text={text} htmlFor={htmlFor} className="mb-1 sm:mb-3"></Label>}
    {children}
    {showError && <FormErrorMessage text={text} errorText={errorText}></FormErrorMessage>}
  </section>
}

export default FormElementWrapper
