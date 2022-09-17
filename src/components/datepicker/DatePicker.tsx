import { useCallback, useEffect, useState } from "react";
import { FieldValues, UseFormClearErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import Select from "../Select/Select";
import { generateMockDateTime, generateMockDurations } from "./datepicker-mock";

type DatePickerProps = {
  showDateTimeError?: boolean
  showDurationError?: boolean
  clearErrors?: UseFormClearErrors<FieldValues>
  setValue: UseFormSetValue<FieldValues>
  register?: UseFormRegister<FieldValues>
  dateTimeDefaultValue?: string
  durationDefaultValue?: string
}

const DatePicker = ({ showDateTimeError, showDurationError, clearErrors, setValue, register, dateTimeDefaultValue, durationDefaultValue }: DatePickerProps) =>{
  const [dateTimeValue, setDateTimeValue] = useState('')
  const [durationValue, setDurationValue] = useState('')

  useEffect(() => {
    if (dateTimeDefaultValue) {
      setDateTimeValue(dateTimeDefaultValue)
      setValue('date-time', dateTimeDefaultValue)
    }
  }, [dateTimeDefaultValue, setValue])

  useEffect(() => {
    if (durationDefaultValue) {
      setDurationValue(durationDefaultValue)
      setValue('duration', durationDefaultValue)
    }
  }, [durationDefaultValue, setValue])

  const handleDateTimeSelect = useCallback(
    (selectedOption: string) => {
      if (clearErrors && showDateTimeError) {
        clearErrors('date-time')
      }
      if (setValue) {
        setValue('date-time', selectedOption)
      }
      setDateTimeValue(selectedOption)
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
      setDurationValue(selectedOption)
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
        options={generateMockDateTime()}
        showError={showDateTimeError}
        onClick={handleDateTimeSelect}
        register={register}
        value={dateTimeValue}></Select>
      <Select id="duration" name="duration"
        text="Duration"
        className="max-w-xxs"
        options={generateMockDurations()}
        showError={showDurationError}
        onClick={handleDurationSelect}
        register={register}
        value={durationValue}></Select>
    </section>
  )
}

export default DatePicker;
