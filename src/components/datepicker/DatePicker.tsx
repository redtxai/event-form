import { useCallback, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import Select, { OptionType } from "../Select/Select";
import { generateMockDateTime, generateMockDurations } from "./datepicker-mock";

type DatePickerProps = {
  showDateTimeError?: boolean
  showDurationError?: boolean
  register?: UseFormRegister<FieldValues>
}

function DatePicker({ showDateTimeError, showDurationError, register }: DatePickerProps) {
  const [dateTimeOptions, setDateTimeOptions] = useState<OptionType[]>(generateMockDateTime())
  const [durationOptions, setDurationOptions] = useState<OptionType[]>(generateMockDurations())

  const handleDateTimeSelect = useCallback(
    (selectedOption: string) => {
      setDateTimeOptions((prevOptions) => {
        return prevOptions.map(({ text }) => ({ text, selected: text === selectedOption }))
      })
    },
    [],
  )

  const handleDurationSelect = useCallback(
    (selectedOption: string) => {
      setDurationOptions((prevOptions) => {
        return prevOptions.map(({ text }) => ({ text, selected: text === selectedOption }))
      })
    },
    [],
  )

  return (
    <section className="w-full flex justify-between">
      <Select id="date-time" name="date-time"
        text="Date & time"
        options={dateTimeOptions}
        showError={showDateTimeError}
        className="max-w-xxs"
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
