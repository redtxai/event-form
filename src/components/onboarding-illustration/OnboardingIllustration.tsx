
import { memo, useEffect, useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { OnboardingType } from '../../models/event.model';
import { onboardingTypeMap } from './onboarding-model';

type OnboardingIllustrationProps = {
  name?: string
  type: OnboardingType
  value?: string,
  checked?: boolean
  className?: string
  onClick?: (value: OnboardingType) => void
  register?: UseFormRegister<FieldValues>
}

const OnboardingIllustration = memo(({ name, type, value, checked, className, onClick, register }: OnboardingIllustrationProps) => {
  const [selected, setSelected] = useState(checked);

  useEffect(() => {
    if (checked) {
      setSelected(checked)
    }
  }, [checked])

  const handleOnChange = () => {
    setSelected(!selected)
    if (onClick) {
      onClick(type)
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
      <input name={name} type="checkbox" checked={selected} onChange={handleOnChange} value={value} className="hidden" {...(register && name && register(name, { required: true }))} />
      <img src={`/assets/img/${onboardingTypeMap[type].img}.svg`} alt={type} />
      <h5 className="text-sm-intermediate leading-4-06 font-normal tracking-tightish text-blue-950 mt-3">{onboardingTypeMap[type].title}</h5>
      <div className='text-center text-xs tracking-tightish text-gray-450 mt-3'>Nulla facilisi. Donec aliquam leo sed eros consectetur, vel </div>
    </section>
  )
})

export default OnboardingIllustration;
