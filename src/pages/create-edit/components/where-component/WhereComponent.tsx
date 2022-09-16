import { useCallback, useState } from "react"
import { FieldValues, UseFormClearErrors, UseFormRegister, UseFormSetValue } from "react-hook-form"
import FormErrorMessage from "../../../../components/form-error-message/FormErrorMessage"
import OnboardingIllustration from "../../../../components/onboarding-illustration/OnboardingIllustration"

type OnboardingMap = {
  virtual: boolean
  inperson: boolean
}

type WhereComponentProps = {
  showErrors?: boolean
  onChange?: (onboardingArray: string[]) => void
  clearErrors?: UseFormClearErrors<FieldValues>
  setValue?: UseFormSetValue<FieldValues>
  register?: UseFormRegister<FieldValues>
}

const WhereComponent = ({ showErrors, clearErrors, setValue, register }: WhereComponentProps) => {
  const [onboardingMap, setOnboardingMap] = useState<OnboardingMap>({ virtual: false, inperson: false })

  const handleVirtualClick = useCallback(
    (selected: boolean) => {
      setOnboardingMap((previousMap) => {
        const updatedMap = { ...previousMap, virtual: selected }
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

  const handleInpersonClick = useCallback(
    (selected: boolean) => {
      setOnboardingMap((previousMap) => {
        const updatedMap = { ...previousMap, inperson: selected }
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
        <OnboardingIllustration name="where" value='virtual' type="virtual" checked={onboardingMap.virtual} onClick={handleVirtualClick} register={register}></OnboardingIllustration>
        <OnboardingIllustration name="where" value='inperson' type="inperson" className="ml-5" checked={onboardingMap.inperson}  onClick={handleInpersonClick} register={register}></OnboardingIllustration>
      </section>
      {showErrors && <FormErrorMessage text="Where"></FormErrorMessage>}
    </section>
    
  )
}

export default WhereComponent
