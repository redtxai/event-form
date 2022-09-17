import Button from "../../../../components/button/Button"
import Title from "../../../../components/title/Title"

const CreateEditHeader = () => {
  return <header>
      <p className="h-16 relative w-full"></p>
      <section className="max-w-xl m-auto bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <Title type="large" text="Event form"></Title>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <Button className="text-sm leading-4-05 py-2 px-8 rounded-md text-slate-650 bg-white border border-gray-150" text="Edit"></Button>
        </div>
      </div>
    </section>
  </header>
}

export default CreateEditHeader
