import { ChangeEventHandler } from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"

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
  register?: UseFormRegister<FieldValues>
}

const Textarea = ({ id, name, className, rows = 3, placeholder, defaultValue = '', value = '', resize = true, register }: TextareaProps) => {
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
        w-full
        ${!resize ? 'resize-none' : ''}
        ${className ? className : ''}`}
      placeholder={placeholder}
      defaultValue={defaultValue || value}
      {...(register && id && register(id, { required: true }))}
    />
  )
}

export default Textarea;
