
import { memo, useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type OnboardingIllustrationProps = {
  name?: string
  type: 'virtual' | 'inperson'
  value?: string,
  checked?: boolean
  className?: string
  onClick?: (selected: boolean) => void
  register?: UseFormRegister<FieldValues>
}

const OnboardingIllustration = memo(({ name, type, value, checked, className, onClick, register }: OnboardingIllustrationProps) => {
  const [selected, setSelected] = useState(checked);

  const handleOnChange = () => {
    setSelected(!selected)
    if (onClick) {
      onClick(!selected)
    }
  }

  const attrMap = {
    virtual: {
      title: 'Virtual',
      img: 'world'
    },
    inperson: {
      title: 'In person',
      img: 'lock'
    }
  }
  return (
    <section className={`
      pt-6 pb-7-5 px-4
      flex flex-col items-center
      rounded-lg bg-white max-w-xxxs
      hover:cursor-pointer
      select-none
      box-border
      border
      ${selected ? 'border-indigo-500 ring-indigo-500' : 'border-slate-175'}
      ${className ? className : ''}`}
      onClick={handleOnChange}>
      <input name={name} type="checkbox" checked={selected} onChange={handleOnChange} value={value} {...(register && name && register(name, { required: true }))} />
      <img src={`/assets/img/${attrMap[type].img}.svg`} alt={type} />
      <h5 className="text-sm-intermediate leading-4-06 font-normal tracking-tightish text-blue-950 mt-3">{attrMap[type].title}</h5>
      <div className='text-center text-xs tracking-tightish text-gray-450 mt-3'>Nulla facilisi. Donec aliquam leo sed eros consectetur, vel </div>
    </section>
  )
})

export default OnboardingIllustration;
