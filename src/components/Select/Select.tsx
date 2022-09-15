import { Fragment, memo, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export type OptionType = {
  text: string,
  selected: boolean
}

type SelectProps = {
  text: string,
  options: OptionType[],
  onClick: (selectedOption: string) => void
}

const Select = memo(({ text, options, onClick }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | undefined>(options.find(option => option.selected))
  return (
    <Menu as="div" className="relative">
      <Menu.Button
        type="button"
        className={`flex justify-between
          rounded-md
          border border-gray-300bg-white
          py-2.5 px-5
          text-sm font-medium
        bg-white
          w-full
          shadow-sm hover:bg-gray-50
          ${selectedOption ? 'text-gray-700' : 'text-slate-450'}
        `}
      >
        {selectedOption?.text || text}
        <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 overflow-y-auto max-h-80">
            {
              options.map(option => 
                <Menu.Item key={option.text}>
                  {() => (
                    <span
                      className={`hover:cursor-pointer hover:bg-gray-50 select-none ${classNames(
                        option.selected ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}`}
                      onClick={() => {
                        setSelectedOption(option);
                        onClick(option.text)
                      }}
                    >
                      {option.text}
                    </span>
                  )}
                </Menu.Item>
              )
            }
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
})

export default Select;
