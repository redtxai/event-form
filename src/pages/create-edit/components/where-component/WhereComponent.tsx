import { useCallback, useState } from "react"
import { FieldValues, UseFormClearErrors, UseFormRegister, UseFormSetValue } from "react-hook-form"
import FormErrorMessage from "../../../../components/form-error-message/FormErrorMessage"
import OnboardingIllustration from "../../../../components/onboarding-illustration/OnboardingIllustration"
import { OnboardingType } from "../../../../models/event.model"

type OnboardingMap = Record<OnboardingType, boolean>

type WhereComponentProps = {
  showErrors?: boolean
  onChange?: (onboardingArray: string[]) => void
  clearErrors?: UseFormClearErrors<FieldValues>
  setValue?: UseFormSetValue<FieldValues>
  register?: UseFormRegister<FieldValues>
}

const WhereComponent = ({ showErrors, clearErrors, setValue, register }: WhereComponentProps) => {
  const [onboardingMap, setOnboardingMap] = useState<OnboardingMap>({ virtual: false, inperson: false })

  const handleClick = useCallback(
    (valueClicked: OnboardingType) => {
      setOnboardingMap((previousMap) => {
        const updatedMap = { ...previousMap, [valueClicked]: !previousMap[valueClicked] }
        if (clearErrors && showErrors) {
          clearErrors('where')
        }
        if (setValue) {
          const mapKeys = (Object.keys(updatedMap) as Array<keyof typeof updatedMap>)
          setValue('where', mapKeys.filter(key => updatedMap[key]))
        }
        return updatedMap
      })
    },
    [clearErrors, setValue, showErrors],
  )

  return (
    <section className="mt-4-05">
      <section className="flex">
        <OnboardingIllustration name="where" value='virtual' type="virtual" checked={onboardingMap.virtual} onClick={handleClick} register={register}></OnboardingIllustration>
        <OnboardingIllustration name="where" value='inperson' type="inperson" className="ml-5" checked={onboardingMap.inperson} onClick={handleClick} register={register}></OnboardingIllustration>
      </section>
      {showErrors && <FormErrorMessage text="Where"></FormErrorMessage>}
    </section>
    
  )
}

export default WhereComponent
