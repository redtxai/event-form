import { useCallback, useState } from "react";
import { FieldValues, UseFormClearErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import Select, { OptionType } from "../Select/Select";
import { generateMockDateTime, generateMockDurations } from "./datepicker-mock";

type DatePickerProps = {
  showDateTimeError?: boolean
  showDurationError?: boolean
  clearErrors?: UseFormClearErrors<FieldValues>
  setValue?: UseFormSetValue<FieldValues>
  register?: UseFormRegister<FieldValues>
}

const DatePicker = ({ showDateTimeError, showDurationError, clearErrors, setValue, register }: DatePickerProps) =>{
  const [dateTimeOptions, setDateTimeOptions] = useState<OptionType[]>(generateMockDateTime())
  const [durationOptions, setDurationOptions] = useState<OptionType[]>(generateMockDurations())

  const handleDateTimeSelect = useCallback(
    (selectedOption: string) => {
      if (clearErrors && showDateTimeError) {
        clearErrors('date-time')
      }
      if (setValue) {
        setValue('date-time', selectedOption)
      }
      setDateTimeOptions((prevOptions) => {
        return prevOptions.map(({ text }) => ({ text, selected: text === selectedOption }))
      })
    },
    [clearErrors, setValue, showDateTimeError],
  )

  const handleDurationSelect = useCallback(
    (selectedOption: string) => {
      if (clearErrors && showDurationError) {
        clearErrors('duration')
      }
      if (setValue) {
        setValue('duration', selectedOption)
      }
      setDurationOptions((prevOptions) => {
        return prevOptions.map(({ text }) => ({ text, selected: text === selectedOption }))
      })
    },
    [clearErrors, setValue, showDurationError],
  )

  return (
    <section className="w-full flex justify-between">
      {showDateTimeError}
      {showDurationError}
      <Select id="date-time" name="date-time"
        text="Date & time"
        className="max-w-xxs"
        options={dateTimeOptions}
        showError={showDateTimeError}
        onClick={handleDateTimeSelect}
        register={register}></Select>
      <Select id="duration" name="duration"
        text="Duration"
        className="max-w-xxs"
        options={durationOptions}
        showError={showDurationError}
        onClick={handleDurationSelect}
        register={register}></Select>
    </section>
  )
}

export default DatePicker;
