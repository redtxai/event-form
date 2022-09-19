
type LabelProps = {
  text: string,
  htmlFor?: string,
  className?: string,
}

const Label = ({ text, htmlFor, className }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-slate-475 font-medium text-xs tracking-tightish hover:cursor-pointer select-none sm:text-sm-intermediate ${className ? className : ''}`}>
      {text}
    </label>
  )
}

export default Label;
