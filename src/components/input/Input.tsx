import { ChangeEventHandler } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export type InputProps = {
  id?: string,
  name?: string
  placeholder?: string
  autoComplete?: string
  className?: string
  type?: string // // in order to expand the system features, this could assume any types listed on the HTMLInputTypeAttribute.
  value?: string // as mentioned above, this property also would assume different types.
  onChange?: ChangeEventHandler<HTMLInputElement>
  register?: UseFormRegister<FieldValues>
}

function Input({ id, name, placeholder, className, autoComplete, type = 'text', value, onChange, register }: InputProps) {
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
        ${className ? className : ''}`}
      value={value || undefined}
      onChange={onChange || undefined}
      {...(register && id && register(id, { required: true }))}
    />
  )
}

export default Input;
