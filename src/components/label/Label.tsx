
type LabelProps = {
  text: string,
  htmlFor?: string,
  className?: string,
}

const Label = ({ text, htmlFor, className }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-slate-475 font-medium text-sm-intermediate tracking-tightish hover:cursor-pointer select-none ${className ? className : ''}`}>
      {text}
    </label>
  )
}

export default Label;
