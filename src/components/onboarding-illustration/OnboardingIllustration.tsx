
import { useState } from 'react';

type OnboardingIllustrationProps = {
  type: 'virtual' | 'inperson'
  onClick?: () => void
}

function OnboardingIllustration({ type, onClick }: OnboardingIllustrationProps) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected)
    if (onClick) {
      onClick()
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
      rounded-lg bg-white max-w-xxs
      hover:cursor-pointer
      select-none
      box-border
      border
      ${selected ? 'border-indigo-500 ring-indigo-500' : 'border-slate-175'}`}
      onClick={handleClick}>
      <img src={`/assets/img/${attrMap[type].img}.svg`} alt={type} />
      <h5 className="text-sm-intermediate leading-4-06 font-normal tracking-tightish text-blue-950 mt-3">{attrMap[type].title}</h5>
      <div className='text-center text-xs tracking-tightish text-gray-450 mt-3'>Nulla facilisi. Donec aliquam leo sed eros consectetur, vel </div>
    </section>
  )
}

export default OnboardingIllustration;
