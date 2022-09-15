import React from 'react';

type InputProps = {
  id?: string,
  name?: string
  placeholder?: string
  autoComplete?: string
  className?: string
  type?: string
}

function Input({ id, name, placeholder, className, autoComplete, type = 'text' }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={`
        input-base-custom-style
        font-normal
        text-sm-intermediate
        tightish
        border-gray-150
        shadow-sm
        rounded-md
        py-2.5
        px-5
        placeholder:text-slate-450
        focus:input-placeholder
        focus:test-txai
      focus:border-indigo-500
      focus:ring-indigo-500
        sm:max-w-xs
        ${className ? className : ''}`}
    />
  )
}

export default Input;
