import { useForm } from "react-hook-form";

import Button from "../../components/button/Button"
import DatePicker from "../../components/datepicker/DatePicker"
import FormElementWrapper from "../../components/form-element-wrapper/FormElementWrapper"
import Input from "../../components/input/Input"
import OnboardingIllustration from "../../components/onboarding-illustration/OnboardingIllustration"
import Textarea from "../../components/textarea/Textarea"
import Title from "../../components/title/Title"
import URLComponent from "../../components/url-component/URLComponent"

const CreateEditBody = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(errors)
    alert(JSON.stringify(data));
  };

  return (
    <section className="w-full h-full bg-custom-100 py-16 border-t border-gray-150">
      <form className="max-w-xl m-auto" onSubmit={handleSubmit(onSubmit)}>
        <FormElementWrapper text="Event Name" htmlFor="event-name" showError={errors?.['event-name']?.type === "required"}>
          <Input id="event-name" name="event-name" placeholder="Event name" className="w-full" register={register}></Input>
        </FormElementWrapper>
        <Title type="small" text="Where" className="mt-9"></Title>
        <section className="flex mt-4-05">
          <OnboardingIllustration type="virtual"></OnboardingIllustration>
          <OnboardingIllustration type="inperson" className="ml-5"></OnboardingIllustration>
        </section>
        <Title type="small" text="When" className="mt-10"></Title>
        <FormElementWrapper text="Set date and time" htmlFor="date-time" className="mt-5-05">
          <DatePicker register={register} showDateTimeError={errors?.['date-time']?.type === "required"} showDurationError={errors?.duration?.type === "required"}></DatePicker>
        </FormElementWrapper>
        <FormElementWrapper text="Description" htmlFor="description" showError={errors?.description?.type === "required"} className="mt-10-05">
          <Textarea id="description" name="description" placeholder="Write a summary about your event" resize={false} className="h-40" register={register}></Textarea>
        </FormElementWrapper>
        <FormElementWrapper text="Slug" htmlFor="slug" showError={errors?.slug?.type === "required"} className="mt-7-05">
          <URLComponent domain="yourdomain.com" id="slug" name="slug" placeholder="custom URL" register={register}></URLComponent>
        </FormElementWrapper>
        <section className="mt-11-05">
          <Button text="Create event" className="py-2.5 px-6 rounded-md bg-indigo-550 font-bold text-base text-white leading-4-07"></Button>
        </section>
      </form>
    </section>
  )
}

export default CreateEditBody
