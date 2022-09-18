
type FormErrorMessageProps = {
  text?: string,
  errorText?: string,
  className?: string,
}

const FormErrorMessage = ({ text, errorText, className }: FormErrorMessageProps) => {
  return <p className={`mt-1 font-normal text-xs leading-3-05 tracking-tightish text-red-650 sm:mt-3 ${className ? className : ''}`}>{errorText || `${text} is required.`}</p>
}

export default FormErrorMessage;
