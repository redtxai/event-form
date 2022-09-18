import { useEffect, useState } from "react"
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form"

type TextareaProps = {
  id: string
  name?: string
  className?: string
  rows?: number
  placeholder?: string
  value?: string,
  resize?: boolean
  containsError?: boolean
  register?: UseFormRegister<FieldValues>
  setValue: UseFormSetValue<FieldValues>
}

const Textarea = ({ id, name, className, rows = 3, placeholder, value = '', resize = true, containsError, register, setValue }: TextareaProps) => {
  const [textareaValue, setTextareaValue] = useState('')

  useEffect(() => {
    if (value) {
      setTextareaValue(value)
      setValue(id, value)
    }
  }, [value, id, setValue])

  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      className={`font-normal
        text-xs sm:text-sm-intermediate
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
        ${containsError ? 'border-red-550 bg-red-25' : ''}
        ${className ? className : ''}`}
      placeholder={placeholder}
      defaultValue={textareaValue}
      {...(register && id && register(id, { required: true }))}
    />
  )
}

export default Textarea;
