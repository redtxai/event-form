import { FieldValues, UseFormRegister } from "react-hook-form"
import FormErrorMessage from "../../../../components/form-error-message/FormErrorMessage"
import OnboardingIllustration from "../../../../components/onboarding-illustration/OnboardingIllustration"

type WhereComponentProps = {
  showErrors?: boolean
  register?: UseFormRegister<FieldValues>
}

const WhereComponent = ({ showErrors, register }: WhereComponentProps) => {
  return (
    <section className="mt-4-05">
      <section className="flex">
        <OnboardingIllustration name="where" type="virtual" register={register}></OnboardingIllustration>
        <OnboardingIllustration name="where" type="inperson" className="ml-5" register={register}></OnboardingIllustration>
      </section>
      {showErrors && <FormErrorMessage text="Where"></FormErrorMessage>}
    </section>
    
  )
}

export default WhereComponent
