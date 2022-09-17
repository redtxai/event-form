import { useEffect, useState } from 'react';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

export type InputProps = {
  id: string,
  name?: string
  placeholder?: string
  autoComplete?: string
  className?: string
  containsError?: boolean
  type?: string // // in order to expand the system features, this could assume any types listed on the HTMLInputTypeAttribute.
  value?: string // as mentioned above, this property also would assume different types.
  register?: UseFormRegister<FieldValues>
  setValue: UseFormSetValue<FieldValues>
}

const Input = ({ id, name, placeholder, className, autoComplete, containsError, type = 'text', value, register, setValue }: InputProps) => {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (value) {
      setInputValue(value)
      setValue(id, value)
    }
  }, [value, id, setValue])

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={`
        font-normal
        text-sm-intermediate
        tracking-tightish
        border
        border-gray-150
        rounded-md
        py-2.5 px-5
        placeholder:text-slate-450
      focus:border-indigo-500
      focus:ring-indigo-500
        ${containsError ? 'border-red-550 bg-red-25' : ''}
        ${className ? className : ''}`}
        defaultValue={inputValue}
      {...(register && id && register(id, { required: true }))}
    />
  )
}

export default Input;
