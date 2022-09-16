import { ChangeEventHandler } from "react"

type TextareaProps = {
  id?: string
  name?: string
  className?: string
  rows?: number
  placeholder?: string
  defaultValue?: string 
  value?: string,
  resize?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Textarea = ({ id, name, className, rows = 3, placeholder, defaultValue = '', value = '', resize = true }: TextareaProps) => {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      className={`font-normal
        text-sm-intermediate
        tracking-tightish
        border
        border-gray-150
        shadow-sm
        rounded-md
        py-2.5
        px-5
        placeholder:text-slate-450
      focus:border-indigo-500
      focus:ring-indigo-500
        sm:max-w-xs
        ${!resize ? 'resize-none' : ''}
        ${className ? className : ''}`}
      placeholder={placeholder}
      defaultValue={defaultValue || value}
    />
  )
}

export default Textarea;
