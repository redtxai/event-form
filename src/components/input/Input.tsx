import { ChangeEventHandler } from 'react';

type InputProps = {
  id?: string,
  name?: string
  placeholder?: string
  autoComplete?: string
  className?: string
  type?: string // // in order to expand the system features, this could assume any types listed on the HTMLInputTypeAttribute.
  value?: string // as mentioned above, this property also would assume different types.
  onChange?: ChangeEventHandler<HTMLInputElement>
}

function Input({ id, name, placeholder, className, autoComplete, type = 'text', value, onChange }: InputProps) {
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
        shadow-sm
        rounded-md
        py-2.5
        px-5
        placeholder:text-slate-450
      focus:border-indigo-500
      focus:ring-indigo-500
        sm:max-w-xs
        ${className ? className : ''}`}
        value={value || undefined}
        onChange={onChange || undefined}
    />
  )
}

export default Input;
