
import React from 'react';

type LabelProps = {
  text: string,
  htmlFor?: string,
  className?: string,
}

function Label({ text, htmlFor, className,  }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`grey-shade-2 font-medium text-sm-intermediate tightish ${className ? className : ''}`}>
      {text}
    </label>
  )
}

export default Label;
