import { memo } from "react"
import Button from "../../../../components/button/Button"
import Title from "../../../../components/title/Title"

const CreateEditHeader = memo(() => {
  return <header>
      <p className="relative w-full sm:h-16"><img className="absolute top-2 right-3 sm:top-7 sm:right-7 cursor-pointer" src="/assets/img/close.svg" alt="close"/></p>
      <section className="max-w-xl m-auto bg-white px-3 py-4 sm:px-6">
        <div className="mt-4 flex flex-wrap items-center justify-between sm:mt-0 sm:mb-4 sm:flex-nowrap">
          <div>
            <Title type="large" text="Event form"></Title>
          </div>
          <div className="flex-shrink-0">
            <Button className="text-sm leading-4-05 py-2 px-8 rounded-md text-slate-650 bg-white border border-gray-150" text="Edit"></Button>
          </div>
      </div>
    </section>
  </header>
})

export default CreateEditHeader
