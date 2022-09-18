import { useForm } from "react-hook-form";

import Button from "../../../../components/button/Button"
import DatePicker from "../../../../components/datepicker/DatePicker"
import FormElementWrapper from "../../../../components/form-element-wrapper/FormElementWrapper"
import Input from "../../../../components/input/Input"
import Textarea from "../../../../components/textarea/Textarea"
import Title from "../../../../components/title/Title"
import URLComponent from "../../../../components/url-component/URLComponent"
import { CustomCircleEvent } from "../../../../models/event.model";
import WhereComponent from "../where-component/WhereComponent";

type CreateEditBodyProps = {
  customCircleEvent: CustomCircleEvent | undefined
}

const CreateEditBody = ({ customCircleEvent }: CreateEditBodyProps) => {
  const {
    register,
    clearErrors,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className="w-full h-full bg-custom-100 px-3 py-6 border-t border-gray-150 sm:py-16 sm-px-0">
      <form className="max-w-xl m-auto" onSubmit={handleSubmit(onSubmit)}>
        <FormElementWrapper text="Event Name" htmlFor="event-name" showError={errors?.['event-name']?.type === "required"}>
          <Input id="event-name" name="event-name" placeholder="Event name"
            value={customCircleEvent?.["event-name"]}
            className="w-full" containsError={errors?.['event-name']?.type === "required"} register={register} setValue={setValue}></Input>
        </FormElementWrapper>
        <Title type="small" text="Where" className="mt-5 sm:mt-9"></Title>
        <WhereComponent showErrors={errors?.where?.type === "required"} clearErrors={clearErrors}
          setValue={setValue} register={register} value={customCircleEvent?.["where"]}></WhereComponent>
        <Title type="small" text="When" className="mt-5 sm:mt-10"></Title>
        <FormElementWrapper text="Set date and time" htmlFor="datetime" className="mt-3 sm:mt-5-05">
          <DatePicker
            clearErrors={clearErrors}
            setValue={setValue}
            register={register}
            showDateTimeError={errors?.['date-time']?.type === "required"}
            showDurationError={errors?.duration?.type === "required"}
            dateTimeDefaultValue={customCircleEvent?.["date-time"]}
            durationDefaultValue={customCircleEvent?.["duration"]}></DatePicker>
        </FormElementWrapper>
        <FormElementWrapper text="Description" htmlFor="description" showError={errors?.description?.type === "required"} className="mt-5 sm:mt-10-05">
          <Textarea id="description"
            name="description"
            placeholder="Write a summary about your event"
            resize={false}
            className="h-32 sm:h-40"
            value={customCircleEvent?.["description"]}
            containsError={errors?.description?.type === "required"}
            register={register} setValue={setValue}></Textarea>
        </FormElementWrapper>
        <FormElementWrapper text="Slug" htmlFor="slug" showError={errors?.slug?.type === "required"} className="mt-5 sm:mt-7-05">
          <URLComponent domain="yourdomain.com"
            id="slug" name="slug" placeholder="custom URL"
            containsError={errors?.['slug']?.type === "required"} register={register}
            value={customCircleEvent?.slug} setValue={setValue}></URLComponent>
        </FormElementWrapper>
        <section className="mt-5 sm:mt-11-05">
          <Button text="Create event" className="py-1.5 px-3 rounded-md bg-indigo-550 font-bold text-xs text-white sm:text-base sm:leading-4-07 sm:py-2.5 sm:px-6"></Button>
        </section>
      </form>
    </section>
  )
}

export default CreateEditBody
